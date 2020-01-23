import React, { useState } from "react";
import { Carousel } from "antd";
import "./Carousal.css";
import Fries from "../Images/Fries.png";
import Burger from "../Images/Burger.png";
import Sandwich from "../Images/Sandwich.png";
import Bowl from "../Images/Bowl.png";

const Carousal = props => {
  // const dark = !props.dark;
  // console.log("Hello checking carousal " + dark);

  // const darker = () => {
  //   if (dark == true) {
  //     setClr("#dcdcdc");
  //   } else if (dark == false) {
  //     setClr("#121212");
  //   }
  // };

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        marginTop: 45
      }}
    >
      <Carousel style={{ backgroundColor: props.clr }} autoplay effect="fade">
        <div>
          <h3
            style={{
              color: props.clr2,
              position: "absolute",
              left: 0,
              top: "50%",
              width: "100%",
              textAlign: "center"
              // font-size: 18px;
            }}
          >
            Fries
          </h3>
          <img style={{ maxWidth: "100%", height: "auto" }} src={Fries} />
        </div>
        <div>
          <h3
            style={{
              color: props.clr2,
              position: "absolute",
              left: 0,
              top: "50%",
              width: "100%",
              textAlign: "center"
              // font-size: 18px;
            }}
          >
            Bowl
          </h3>
          <img style={{ width: "100%", height: "auto" }} src={Bowl} />
        </div>
        <div>
          <h3
            style={{
              color: props.clr2,
              position: "absolute",
              left: 0,
              top: "50%",
              width: "100%",
              textAlign: "center"
              // font-size: 18px;
            }}
          >
            Sandwich
          </h3>
          <img style={{ width: "100%", height: "auto" }} src={Sandwich} />
        </div>
        <div>
          <h3
            style={{
              color: props.clr2,
              position: "absolute",
              left: 0,
              top: "50%",
              width: "100%",
              textAlign: "center"
              // font-size: 18px;
            }}
          >
            Burger
          </h3>
          <img style={{ width: "100%", height: "auto" }} src={Burger} />
        </div>
      </Carousel>
      ,
    </div>
  );
};

export default Carousal;
