import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { message, Button } from "antd";
import Navb from "./Components/Navb";
import ImageGrid from "./Components/ImageGrid";
import Carousal from "./Components/Carousel";
import QuickLinks from "./Components/QuicLinks";
import Posts from "./Components/Posts";

function App() {
  const info = () => {
    message.info("Site under construction");
  };
  const [clr, setClr] = useState("#121212");
  const [clr2, setClr2] = useState("#dcdcdc");
  const myCallback = dataFromChild => {
    setClr(dataFromChild);
    console.log("Hello checking state" + clr);
  };
  const myCallback2 = dataFromChild => {
    setClr2(dataFromChild);
    console.log("Hello checking state" + clr2);
  };

  return (
    <Router>
      <Navb callbackFromParent={myCallback} callbackFromParent2={myCallback2} />
      <Carousal clr={clr} clr2={clr2} />
      <QuickLinks clr={clr} clr2={clr2} />
      <Posts clr={clr} clr2={clr2} />
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
    </Router>
  );
}

export default App;
