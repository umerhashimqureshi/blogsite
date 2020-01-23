import React, { Component, useState } from "react";
import { Row, Col, Icon } from "antd";

import Fries from "../Images/Fries.png";

const QuickLinks = props => {
  const [check, setCheck] = useState(true);
  const [textYN, setTextYN] = useState("Yes?");
  const [iconY, setIconY] = useState("fullscreen");
  const [display, setDisplay] = useState("hidden");
  const [width, setWidth] = useState("40%");
  const [back, setBack] = useState("transparent");

  const eHandler = () => {
    setCheck(!check);
    if (check == true) {
      setTextYN("No!");
      setIconY("fullscreen-exit");
      setDisplay("visible");
      setWidth("80%");
      setBack(props.clr);
    } else if (check == false) {
      setTextYN("Yes?");
      setIconY("fullscreen");
      setDisplay("hidden");
      setWidth("40%");
      setBack("transparent");
    }
  };
  return (
    <div
      style={{
        width: width,
        margin: "auto",
        backgroundColor: back,
        textAlign: "center",
        marginTop: 10
      }}
    >
      <h2 style={{ color: props.clr2, textAlign: "center", padding: 20 }}>
        Quick Links?
      </h2>
      <Icon
        style={{
          fontSize: "x-large",
          left: 0,
          top: "50%",
          textAlign: "center",
          color: props.clr2
        }}
        onClick={eHandler}
        type={iconY}
      />
      <p
        style={{
          textAlign: "center",
          width: "100%",
          //   fontSize: "x-large",
          color: props.clr2
        }}
      >
        {textYN}
      </p>
      <Row
        style={{
          margin: "auto",
          textAlign: "center",
          visibility: display
          // backgroundColor: props.clr
        }}
        type="flex"
      >
        <Col span={6} order={1}>
          <img style={{ width: "25%" }} src={Fries} />
          <p style={{ color: props.clr2 }}>Fast Food</p>
        </Col>
        <Col span={6} order={2}>
          <img style={{ width: "25%" }} src={Fries} />
          <p style={{ color: props.clr2 }}>Fast Food</p>{" "}
        </Col>
        <Col span={6} order={3}>
          <img style={{ width: "25%" }} src={Fries} />
          <p style={{ color: props.clr2 }}>Fast Food</p>
        </Col>
        <Col span={6} order={4}>
          <img style={{ width: "25%" }} src={Fries} />
          <p style={{ color: props.clr2 }}>Fast Food</p>
        </Col>
      </Row>
    </div>
  );
};

export default QuickLinks;
