import React, { Component, useState } from "react";
import { Row, Col, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Fries from "../Images/Fries.png";

const QuickLinks = props => {
  const somethingElse = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [check, setCheck] = useState(true);

  const eHandler = () => {
    setCheck(!check);
    // if (check == true) {
    //   setTextYN("No!");
    //   setIconY("fullscreen-exit");

    //   setBack(props.clr);
    // } else if (check == false) {
    //   setTextYN("Yes?");
    //   setIconY("fullscreen");
    // }
  };

  const check2 = () => {
    props.history.push("/adminPanel");
    console.log(props.history.push("/adminPanel"));
  };

  return (
    <animated.div style={somethingElse}>
      <div
        style={{
          width: "auto",
          maxWidth: "60%",
          height: "auto",
          borderRadius: "12px",
          margin: "auto",
          backgroundColor: props.clr,
          textAlign: "center",
          marginTop: 15
        }}
      >
        <Row type="flex">
          <Col span={8} order={1}>
            <Link>
              <p style={{ color: props.clr2, marginTop: 10 }} onClick={check2}>
                Restaurants List
              </p>
            </Link>
          </Col>
          <Col span={8} order={2}>
            <Link
              onClick={() => {
                props.history.push("/adminPanel");
              }}
            >
              <p style={{ color: props.clr2, marginTop: 10 }}>On Budget</p>
            </Link>
          </Col>
          <Col span={8} order={3}>
            <Link>
              <p style={{ color: props.clr2, marginTop: 10 }}>Recents</p>
            </Link>
          </Col>
          {/* <Col span={6} order={3}>
            <Link>
              <p style={{ color: props.clr2, marginTop: 10 }}>Top Rated</p>
            </Link>
          </Col> */}
        </Row>
      </div>
    </animated.div>
  );
};

export default withRouter(QuickLinks);
