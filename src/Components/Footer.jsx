import React from "react";

const Footer = props => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        borderRadius: "30px",
        marginBottom: 20,
        marginTop: 45,
        height: "70px",
        color: props.clr2,
        backgroundColor: props.clr,
        textAlign: "center"
      }}
    >
      <p style={{ textAlign: "center" }}>
        All Copyrights are Reserved as of 2020 lol.
      </p>
    </div>
  );
};

export default Footer;
