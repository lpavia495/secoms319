import React from "react";

function Footer({
  setShowAbout,
  setShowCredits,
  showFooter
}) {
  //Causes the footer to appear when you scoll up, and disappear otherwise
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let footer = document.querySelector(".footer");
    if (footer) {
      if (prevScrollPos > currentScrollPos) {
        // User is scrolling up, show hidden footer
        footer.classList.remove("hidden");
      } else {
        // User is scrolling down, hide footer
        footer.classList.add("hidden");
      }
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <>
      {showFooter && (
        <footer className="footer">
          <div className="foot">
            <div className="flex-container">
              <div className="home link">
                <a href="#top">Back to top</a>
              </div>
              <div className="about link">
                <a
                  href=""
                  onClick={(event) => {
                    event.preventDefault();
                    setShowAbout(true);
                    setShowCredits(false);
                  }}
                >
                  About Me
                </a>
              </div>
              <div className="credits link">
                <a
                  href=""
                  onClick={(event) => {
                    event.preventDefault();
                    setShowCredits(true);
                    setShowAbout(false);
                  }}
                >
                  Credits
                </a>
              </div>
              
              <div className="github link">
                <a href="https://github.com/lpavia495">
                  <img
                    src={require("./images/github.png")}
                    alt="Github Logo"
                    width="90em"
                    
                  />
                </a>
              </div>
              
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
