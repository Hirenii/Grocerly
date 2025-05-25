const cron = require("node-cron");
const orderModel = require("../models/orderModel");
const nodemailer = require("nodemailer");

// Runs every day at 9 AM - * 9 * * *
cron.schedule("20 12 * * *", async () => {
  console.log("Running expiry notification job...");

  try {
    const allOrders = await orderModel.find().populate("user");
    const today = new Date();

    for (const order of allOrders) {
      const user = order.user;
      if (!user) {
        console.log("User not found for order:", order._id);
        continue;
      }
      if (order.status != "Delivered") {
        console.log("Order not Delivered Yet", order._id);
        continue;
      }
      console.log("User: ", user);
      console.log("Order: ",order);
      for (const item of order.orderItems) {
        const expiryDate = new Date(item.expiryDate);

        const timeDiff = expiryDate - today; // in millisecond
        console.log("timeDiff: ", timeDiff);
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // convert from milliseconds to days
        console.log("diffDays: ", diffDays);

        if (diffDays <= 5) {
            // define transporter and send the mail
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_PASSWORD,
                },
            });
            await transporter.sendMail({
                from: process.env.SMTP_MAIL,
                to: user.email,
                subject: "E-SHOP - Product Expiring Soon",
                text: `Hi ${user.firstName},\n\nYour item "${item.name}", ordered on ${order.orderDate} is expiring on ${expiryDate.toDateString()}.\nMake sure to use it before it goes bad!`,
            });
        }

      }
    }

    console.log("Expiry notifications sent.");
  } catch (error) {
    console.error("Error running expiry notification job:", error);
  }
});
