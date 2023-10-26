import React from "react";

function Credits({
  setShowCredits,
  setIsCrudVisable
}) {

  setIsCrudVisable(false);
  return (
    <div>
      {(
        <main role="main">
          <div className="creditsContainer">
            <div className="creditsContent">
              <h1 className="creator">Creator</h1>
              <h2 className="creators2">
                This website was created as a final project using react for the front end, and mongodb for the backend. It consists of a catalog of watches. This website was developed
                for the final project by:
              </h2>
              <br />
              <h3 className="creators3">
                Luke Pavia (
                <a href="mailto:lpavia@iastate.edu">lpavia@iastate.edu</a>){" "}
                <br />
                <br />
              
                
                <br/>
                <br/>
                Professor: Dr. Abraham N. Aldaco Gastelum (
                <a href="aaldaco@IASTATE.EDU">
                aaldaco@IASTATE.EDU
                </a>)
              </h3>
            </div>
            <button
              className="creditsBack"
              onClick={() => {
                setShowCredits(false);
                setIsCrudVisable(true);
              }}
            >
              Back
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default Credits;
