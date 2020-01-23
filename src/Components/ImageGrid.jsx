import React from "react";
import { Row, Col } from "antd";
//import Fries from "../Images/ImageGrid/Fries.png";
import Fries from "../Images/Fries.png";
import Burger from "../Images/Burger.png";
import Sandwich from "../Images/Sandwich.png";
import Bowl from "../Images/Bowl.png";
import Taco from "../Images/Taco.png";
import Panini from "../Images/Panini.png";

const ImageGrid = () => {
  return (
    <div
      style={{
        width: "60%",
        maxWidth: "60%",
        margin: "auto",
        textAlign: "center",
        marginTop: 30,
        marginRight: "autp"
      }}
    >
      <Row type="flex">
        <Col span={4} order={1}>
          <img
            style={{ width: "300px", maxWidth: "200px", height: "auto" }}
            src={Fries}
          />
        </Col>
        <Col span={4} order={2}>
          <img
            style={{ width: "300px", maxWidth: "200px", height: "auto" }}
            src={Burger}
          />
        </Col>
        <Col span={4} order={3}>
          <img
            style={{ width: "300px", maxWidth: "200px", height: "auto" }}
            src={Sandwich}
          />
        </Col>
        <Col span={4} order={4}>
          <img
            style={{ width: "300px", maxWidth: "200px", height: "auto" }}
            src={Bowl}
          />
        </Col>
        <Col span={4} order={5}>
          <img
            style={{
              width: "300px",
              maxWidth: "200px",
              height: "auto",
              marginTop: 45
            }}
            src={Taco}
          />
        </Col>
        <Col span={4} order={6}>
          <img
            style={{
              width: "300px",
              maxWidth: "200px",
              height: "auto",
              marginTop: 45
            }}
            src={Panini}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ImageGrid;
