import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

const AdminMenu = props => {
  return (
    <div
      style={{
        width: "90%",
        borderRadius: "12px",
        margin: "auto",
        marginTop: 45,
        backgroundColor: props.clr,
        color: props.clr2,
        textAlign: "center"
      }}
    >
      <Row type="flex">
        <Col span={8} order={1}>
          <Link>
            <p style={{ color: props.clr2, marginTop: 10 }}>All Posts</p>
          </Link>
        </Col>
        <Col span={8} order={2}>
          <Link to="/form">
            <p style={{ color: props.clr2, marginTop: 10 }}>
              Create a New Post
            </p>
          </Link>
        </Col>
        <Col span={8} order={3}>
          <Link>
            <p style={{ color: props.clr2, marginTop: 10 }}>Make Changes</p>
          </Link>
        </Col>
        {/* <Col span={6} order={3}>
            <Link>
              <p style={{ color: props.clr2, marginTop: 10 }}>Top Rated</p>
            </Link>
          </Col> */}
      </Row>
    </div>
  );
};

export default AdminMenu;
