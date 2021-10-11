import React from "react";
import "./index.css";
import img1 from "../../images/front.png";
import img2 from "../../images/back.png";
import img3 from "../../images/left.png";
import img4 from "../../images/right.png";
import img5 from "../../images/bottom.png";
import img6 from "../../images/top.png";
const CssSkyBox = () => {
  const handleMouseDown = () => {
    const e = window.event
    console.log(e)
  };
  const handleMouseMove = () => {
      const e = window.event
      console.log(e)
  };
  return (
    <div className="camera" id="camera">
      <div
        className="space"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <img className="front" src={img1} title="前" />
        <img className="back" src={img2} title="后" />
        <img className="left" src={img3} title="左" />
        <img className="right" src={img4} title="右" />
        <img className="bottom" src={img5} title="底" />
        <img className="top" src={img6} title="上" />
      </div>
    </div>
  );
};

export default CssSkyBox;
