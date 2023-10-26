import React from "react";

function About({ showAbout, setShowAbout, setIsCrudVisable }) {

  setIsCrudVisable(false);
  
  return (
    <div className="aboutPage">
      {showAbout && (
        <div>
          <div
            className="aboutContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h1
              className="aboutPara"
              style={{
                fontFamily: "Gill Sans",
                fontSize: "3.5em",
                color: "purple",
                fontWeight: "bolder",
              }}
            >
              The Creation of the Watch Catalog
            </h1>
            <button
              className="aboutBack"
              onClick={(event) => {
                setShowAbout(false);
                setIsCrudVisable(true);
              }}
            >
              Back
            </button>
          </div>

          

          <p className = "aboutContainer" id="aboutP" style={{
                fontFamily: "Gill Sans",
                fontSize: "1.5em",
                color: "purple",
              }}>
            Growing up, I always had a love for watches. I enjoyed learning about the history of watches, how they
            functioned, and learning about how they are made. I used to save up all my money to buy new expensive
            watches. As I grew into my teens, I started builing and taking apart watches. Later as an adult, I began 
            taking computer science courses so that I could build an online watch catalog! I present to you my very 
            first watch catalog! I hope you enjoy! (Not a real company by the way)
          </p>

         
          

          
        </div>
      )}
    </div>
  );
}

export default About;
