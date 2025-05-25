const mongoose = require("mongoose");
const Product = require("./models/productModel"); // Adjust the path to your productModel

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://mananbhatt:mananbhatt@cluster0.ojdpfb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Product data with category IDs
const productsData = [
  {
    name: "Tomato",
    rate: 45,
    public_id: "products/o9ajm7klcwgfrwnhnfua",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687321841/products/o9ajm7klcwgfrwnhnfua.png",
    category: "67efd516ab1796af604353e5", // Vegetables
    stocks: 50.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T14:00:34.510Z"),
  },
  {
    name: "Lemon",
    rate: 55,
    public_id: "products/xcn21ux8qhraebqp70fs",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687321909/products/xcn21ux8qhraebqp70fs.jpg",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: 1991.5,
    kilogramOption: [{ $numberDecimal: "0.5" }],
    numOfReviews: 0,
    date: new Date("2023-06-28T14:01:42.407Z"),
  },
  {
    name: "Carrot",
    rate: 55,
    public_id: "products/f8pbvvbuuzlzgh8ulrg9",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687322215/products/f8pbvvbuuzlzgh8ulrg9.png",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: -0.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:36:55.774Z"),
  },
  {
    name: "Pineapple",
    rate: 70,
    public_id: "products/yeic8xco0qqsacouyhzv",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687322351/products/yeic8xco0qqsacouyhzv.jpg",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: -3,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:39:12.390Z"),
  },
  {
    name: "Strawberry",
    rate: 65,
    public_id: "products/ukc22tokihgwkhwg1ut7",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687322497/products/ukc22tokihgwkhwg1ut7.jpg",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: -0.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:41:37.744Z"),
  },
  {
    name: "Mango",
    rate: 75,
    public_id: "products/nf08hobpzr65khrrqgru",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687322555/products/nf08hobpzr65khrrqgru.jpg",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: 33.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:42:36.014Z"),
  },
  {
    name: "Pappaya",
    rate: 65,
    public_id: "products/jmv0qjmtnycfzuaohhyo",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687322613/products/jmv0qjmtnycfzuaohhyo.jpg",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: 0,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:43:33.676Z"),
  },
  {
    name: "Melon",
    rate: 53,
    public_id: "products/dramyirtwlvqirhuxy4p",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687322668/products/dramyirtwlvqirhuxy4p.jpg",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: 60,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:44:28.768Z"),
  },
  {
    name: "Banana",
    rate: 45,
    public_id: "products/dbhho02ecjgac5wta3qs",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687322731/products/dbhho02ecjgac5wta3qs.jpg",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: -1.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:45:32.278Z"),
  },
  {
    name: "Kiwi",
    rate: 100,
    public_id: "products/ufs6khmrpwp307l26yik",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687322796/products/ufs6khmrpwp307l26yik.jpg",
    category: "67efd53dab1796af604353e9", // Fruits
    stocks: -0.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:46:36.857Z"),
  },
  {
    name: "Coriander",
    rate: 10,
    public_id: "products/aoqcwrtkoyhdhawsdrel",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687323247/products/aoqcwrtkoyhdhawsdrel.jpg",
    category: "67efd516ab1796af604353e5", // Vegetables
    stocks: -1,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:54:07.786Z"),
  },
  {
    name: "Gralic",
    rate: 49,
    public_id: "products/nxieltjol027qzdvdmta",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687323439/products/nxieltjol027qzdvdmta.jpg",
    category: "67efd516ab1796af604353e5", // Vegetables
    stocks: -0.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:57:20.130Z"),
  },
  {
    name: "Lady Finger",
    rate: 60,
    public_id: "products/wslprilvmazyxeyoy1b6",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687323489/products/wslprilvmazyxeyoy1b6.jpg",
    category: "67efd516ab1796af604353e5", // Vegetables
    stocks: 1.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:58:09.680Z"),
  },
  {
    name: "Green Chilli",
    rate: 40,
    public_id: "products/mjn49wriacav1qcavd94",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687323549/products/mjn49wriacav1qcavd94.jpg",
    category: "67efd516ab1796af604353e5", // Vegetables
    stocks: 6.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T04:59:09.787Z"),
  },
  {
    name: "Pea",
    rate: 78,
    public_id: "products/rnpdbivb6qluuqoqbnk6",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687323610/products/rnpdbivb6qluuqoqbnk6.jpg",
    category: "67efd516ab1796af604353e5", // Vegetables
    stocks: 3,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T05:00:10.350Z"),
  },
  {
    name: "Cauliflower",
    rate: 80,
    public_id: "products/iciuurxdmt8jbm5mavtk",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687323766/products/iciuurxdmt8jbm5mavtk.jpg",
    category: "67efd516ab1796af604353e5", // Vegetables
    stocks: -0.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T05:02:46.764Z"),
  },
  {
    name: "Milk",
    rate: 25,
    public_id: "products/pi2zlg1ybov8wsoxyewq",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687324058/products/pi2zlg1ybov8wsoxyewq.png",
    category: "67efd560ab1796af604353ec", // Dairy
    stocks: 0,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "2" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T05:07:38.641Z"),
  },
  {
    name: "Eggplant",
    rate: 28,
    public_id: "products/ecfwne6srqz17xpe6l9p",
    url: "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687325197/products/ecfwne6srqz17xpe6l9p.jpg",
    category: "67efd516ab1796af604353e5", // Vegetables
    stocks: 3.5,
    kilogramOption: [
      { $numberDecimal: "0.5" },
      { $numberDecimal: "1.5" },
      { $numberDecimal: "1" },
      { $numberDecimal: "2" },
      { $numberDecimal: "2.5" },
      { $numberDecimal: "3" },
      { $numberDecimal: "3.5" },
    ],
    numOfReviews: 0,
    date: new Date("2023-06-28T05:26:37.639Z"),
  },
];

// Insert products
const insertProducts = async () => {
  try {
    await Product.insertMany(productsData);
    console.log("Products inserted successfully");
  } catch (error) {
    console.error("Error inserting products:", error);
  }
};

// Run the seeding
const seedDatabase = async () => {
  await insertProducts();
  mongoose.connection.close();
  console.log("Database seeding completed and connection closed.");
};

seedDatabase().catch(console.error);
