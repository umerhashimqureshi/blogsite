import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navb.css";
import { Switch } from "antd";

const Navb = props => {
  // const { Search } = Input;
  const [dark, setDark] = useState(true);
  const [navColor, setNavColor] = useState("#121212");
  const [textColor, setTextColor] = useState("#dcdcdc");
  const [backColor, setBackColor] = useState("black");
  useEffect(() => {
    // Update the document title using the browser API
    document.body.style.backgroundColor = backColor;
    document.body.style.fontFamily = "Montserrat";
  });
  function onChange(checked) {
    setDark(!dark);
    console.log(`switch to ${checked}`);
    if (dark == true) {
      setNavColor("#dcdcdc");
      setTextColor("#121212");
      setBackColor("white");
    } else if (dark == false) {
      setNavColor("#121212");
      setTextColor("#dcdcdc");
      setBackColor("black");
    }
    props.callbackFromParent(textColor);
    props.callbackFromParent2(navColor);
  }

  return (
    // <Navbar
    //   className="nav-wrapper  teal lighten-2"
    //   style={{
    //     backgroundColor: "#121212",
    //     width: "85%",
    //     margin: "auto",
    //     borderRadius: "300px",
    //     minHeight: "20%",
    //     padding: "1%",
    //     marginTop: "1.5%",
    //     color: "#dcdcdc",
    //     fontSize: "large",
    //     textAlign: "center"
    //   }}
    // >
    //   <Navbar.Brand
    //     href="/"
    //     className="navbar-left"
    //     style={{
    //       fontSize: "x-large",
    //       marginLeft: "4%",
    //       float: "left",
    //       color: "#dcdcdc"
    //     }}
    //   >
    //     byumerqureshi
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Search
    //       style={{ marginTop: 5 }}
    //       className="mx-5"
    //       placeholder="Input search text"
    //       onSearch={value => console.log(value)}
    //       style={{ width: 300 }}
    //     />
    //     <Nav className="mr-auto">
    //       {/* <strong style={{ marginTop: "5%", marginLeft: "5%" }}>
    //         Dark Mode
    //       </strong>
    //       <Switch
    //         className="ml-4"
    //         style={{ marginTop: 5 }}
    //         defaultChecked
    //         onChange={onChange}
    //       /> */}
    //       <Nav.Link
    //         className="ml-2"
    //         style={{
    //           color: "#dcdcdc",
    //           float: "right",
    //           fontSize: "large",
    //           marginRight: "5%",
    //           marginTop: 5
    //         }}
    //       >
    //         Link2
    //       </Nav.Link>
    //       <Nav.Link
    //         className="ml-2 mr-4"
    //         style={{
    //           color: "#dcdcdc",
    //           float: "right",
    //           fontSize: "large",
    //           marginRight: "5%",
    //           marginTop: 5
    //         }}
    //       >
    //         Link1
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    //Newvali
    // <Navbar
    //   expand="lg"
    //   style={{
    //     borderRadius: "20px",
    //     width: "85%",
    //     margin: "auto",
    //     marginTop: "1.5%",
    //     backgroundColor: "#121212"
    //   }}
    // >
    //   <Navbar.Brand
    //     style={{ fontSize: "x-large", color: "#dcdcdc", marginLeft: 70 }}
    //     href="#home"
    //   >
    //     byumerqureshi
    //   </Navbar.Brand>
    //   <Navbar.Toggle
    //     style={{ color: "#dcdcdc" }}
    //     aria-controls="basic-navbar-nav"
    //   />
    //   <Navbar.Collapse style={{ color: "#dcdcdc" }} id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <strong
    //         style={{
    //           marginTop: 10,
    //           marginLeft: "430%",
    //           fontSize: "large",
    //           color: "#dcdcdc"
    //         }}
    //       >
    //         Dark
    //       </strong>
    //       <Switch
    //         className="ml-4"
    //         style={{
    //           //    marginTop: 12,
    //           marginLeft: "5%"
    //         }}
    //         defaultChecked
    //         onChange={onChange}
    //       />
    //       <Nav.Link
    //         style={{
    //           marginLeft: "20%",
    //           //    marginTop: 2.5,
    //           color: "#dcdcdc",
    //           fontSize: "large"
    //         }}
    //         href="#home"
    //       >
    //         Home
    //       </Nav.Link>
    //       <Nav.Link
    //         style={{
    //           marginLeft: "10%",
    //           //        marginTop: 3,
    //           color: "#dcdcdc",
    //           fontSize: "large"
    //         }}
    //         href="#link"
    //       >
    //         Link
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>

    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: navColor,
        width: "90%",
        margin: "auto",
        marginTop: 20,
        borderRadius: "30px"
      }}
    >
      <Navbar.Brand
        style={{
          color: textColor,
          marginLeft: "5%"
        }}
        href="/"
      >
        blogsite
      </Navbar.Brand>
      <Navbar.Toggle
        style={{
          backgroundColor: "trasparent",
          borderColor: "transparent",
          marginRight: "5%"
        }}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          style={{
            color: textColor,
            marginLeft: "2%",
            padding: 10
          }}
          className="mr-auto"
        >
          <Nav.Link style={{ color: textColor }} href="#features">
            Profile
          </Nav.Link>
          <Nav.Link
            style={{ color: textColor }}
            //href="#pricing"
          >
            About Me
          </Nav.Link>
        </Nav>
        <hr style={{ backgroundColor: textColor }} />
        <Nav
          style={{
            color: textColor,
            marginRight: "5%",
            marginLeft: "2%",
            padding: 10
          }}
        >
          {/* <Nav.Link style={{ color: textColor }} href="#deets">
            More deets
          </Nav.Link> */}
          <Nav.Link style={{ color: textColor }}>
            Dark
            <Switch className="ml-2" defaultChecked onChange={onChange} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navb;
