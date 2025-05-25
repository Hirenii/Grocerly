import React from "react"; 
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              <img
                style={{
                  width: "20rem",
                  height: "20rem",
                  margin: "2rem 0",
                  borderRadius: "100%",
                }}
                src="https://hirenithakkar.vercel.app/photo_2024-12-22_16-50-45.jpg"
                alt="Founder"
              />
              <h1>Hireni Thakkar</h1>
              <button
                onClick={() =>
                  window.open("https://hirenithakkar.vercel.app/", "_blank")
                }
              >
                Visit Website
              </button>
              <br />
              <p>
                {/* This is a sample website made by @Hireni Thakkar. */}
                <br />
                {/* Only with the purpose to learn MERN Stack. */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;