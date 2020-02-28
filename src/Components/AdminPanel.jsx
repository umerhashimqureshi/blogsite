import React, { useState } from "react";
import Navb from "./Navb";
import { withRouter } from "react-router-dom";
import PostsAdmin from "./PostsAdmin";
import ScrollAnimation from "react-animate-on-scroll";
import AdminMenu from "./AdminMenu";

const AdminPanel = () => {
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

  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <Navb
          callbackFromParent={myCallback}
          callbackFromParent2={myCallback2}
        />
        <AdminMenu clr={clr} clr2={clr2} />
        <PostsAdmin clr={clr} clr2={clr2} />
      </ScrollAnimation>
    </div>
  );
};

export default withRouter(AdminPanel);
