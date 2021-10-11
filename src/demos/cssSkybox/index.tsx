import React, { useState } from "react";
import "./index.css";
import img1 from "../../images/front.png";
import img2 from "../../images/back.png";
import img3 from "../../images/left.png";
import img4 from "../../images/right.png";
import img5 from "../../images/bottom.png";
import img6 from "../../images/top.png";
const CssSkyBox = () => {
  let lastX,lastY,currentX,currentY
  const [roateData,setRotateData] = useState()
  const handleMouseDown = (event:any) => {
    const e = event||window.event
    console.log(e,'按下')
    lastX = e?.pageX
    lastY = e?.pageY

  };
  const handleMouseMove = () => {
      const e = window.event
      // console.log(e)
  };
  const handleMouseUp = (event:any) =>{
    const e = event||window.event
    currentX =e?.pageX
    currentY = e?.pageY
    console.log(e,'释放')
  }
  return (
    <div className="camera" id="camera">
      <div
        className="space"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{transform:`${roateData}`}}
      >
        <img className="front" src={img1} title="前" draggable="false"/>
        <img className="back" src={img2} title="后"  draggable="false"/>
        <img className="left" src={img3} title="左"  draggable="false"/>
        <img className="right" src={img4} title="右" draggable="false"/>
        <img className="bottom" src={img5} title="底" draggable="false"/>
        <img className="top" src={img6} title="上" draggable="false"/>
      </div>
    </div>
  );
};

export default CssSkyBox;
