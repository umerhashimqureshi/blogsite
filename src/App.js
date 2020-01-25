import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { message, Button } from "antd";
// import { bounce } from "react-animations";
import Navb from "./Components/Navb";
import ImageGrid from "./Components/ImageGrid";
import history from "./Components/history";
import Carousal from "./Components/Carousel";
import Footer from "./Components/Footer";
import QuickLinks from "./Components/QuicLinks";
import Posts from "./Components/Posts";
import Form from "./Components/Form";
import InstaCheck from "./Components/InstaCheck";
import AdminPanel from "./Components/AdminPanel";

function App() {
  const info = () => {
    message.info("Site under construction");
  };
  const [clr, setClr] = useState("#121212");
  const [clr2, setClr2] = useState("#dcdcdc");

  const myCallback = dataFromChild => {
    setClr(dataFromChild);
    //console.log("Hello checking state" + clr);
  };
  const myCallback2 = dataFromChild => {
    setClr2(dataFromChild);
    // console.log("Hello checking state" + clr2);
  };
  // console.log(clr, clr2);

  return (
    // <Router>
    <ScrollAnimation
      animateIn="bounce"
      initiallyVisible={true}
      animateOnce={true}
    >
      <ScrollAnimation animateIn="fadeIn">
        <Navb
          callbackFromParent={myCallback}
          callbackFromParent2={myCallback2}
        />
        <Carousal clr={clr} clr2={clr2} />
        <QuickLinks clr={clr} clr2={clr2} />
        <Posts clr={clr} clr2={clr2} />
        <Footer clr={clr} clr2={clr2} />
        {/* <div style={{ textAlign: "center", marginTop: 25 }}>
        <Button
          style={{
            margin: "auto"
          }}
          type="primary"
          onClick={info}
        >
          Click Me
        </Button>
      </div> */}
      </ScrollAnimation>
    </ScrollAnimation>

    // <Switch>
    //   <Route to="/" />
    //   <Route to="/adminPanel">
    //     <AdminPanel />
    //   </Route>
    // </Switch>
    // </Router>
  );
}

export default App;
