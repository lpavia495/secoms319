import React from "react";
import leftPanel from "./images/leftPanel.png";

function LeftPanel() {
  
  return (
    <>
      <div className="h-screen bg-slate-800 p-3 xl:basis-1/5" style={{ height: "100%" }}>
        <img className="w-full" src={leftPanel} alt="Left Panel Image" />
        <div className="px-6 py-4">
          <h1 className="text-3xl mb-2 font-bold" style={{ color: "purple" }}>
            {" "}
            Luke's Watch Catalog
          </h1>
          <h1 className="custom-medium-text mb-2 font-bold" style={{ color: "purple" }}>
            {" "}
            Created by Luke Pavia
          </h1>
        </div>
      </div>
    </>
  );
}

export default LeftPanel;
