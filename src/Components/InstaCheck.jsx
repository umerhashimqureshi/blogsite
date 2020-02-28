import React from "react";
import axios from "axios";
import { useEffect } from "react";
import $ from "jquery";
import { useState } from "react";
import { Button, Input } from "antd";

const InstaCheck = props => {
  const [photo, setPhoto] = useState("");
  const [input, setInput] = useState("check");
  function getPhoto(a) {
    // validation for instagram usernames
    var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
    var validation = regex.test(a);

    if (validation) {
      axios
        .get("https://www.instagram.com/" + a + "/?__a=1")
        .then(function(data) {
          // getting the url

          //var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];
          console.log(data.data);
          var title =
            data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
              .location.name;
          var author = data.data.graphql.user.full_name;
          var desc =
            data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
              .edge_media_to_caption.edges[0].node.text;
          var authorURL =
            "https://www.instagram.com/" + data.data.graphql.user.username;
          var url =
            "https://www.instagram.com/p/" +
            data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
              .shortcode;
          //   console.log(title);
          //   console.log(author);
          //   console.log(desc);
          props.callBackFromParent(title, author, desc, authorURL, url);
          //console.log(data.data.graphql.user.profile_pic_url_hd);
          //   console.log(
          //     data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
          //       .display_url
          //   );
          //   console.log(
          //     data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
          //       .thumbnail_resources[0].src
          //   );
          //   console.log(
          //     data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
          //       .thumbnail_resources[1].src
          //   );
          //   console.log(
          //     data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
          //       .thumbnail_resources[2].src
          //   );
          //   console.log(
          //     data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
          //       .thumbnail_resources[3].src
          //   );
          //   console.log(
          //     data.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
          //       .thumbnail_resources[4].src
          //   );
          setPhoto(data.data.graphql.user.profile_pic_url_hd);
          //   $("#photoReturn").attr("src", photo); //document.getElementbyId["photoReturn"].src = photo;
          // update img element
          //   document.getElementById("photoReturn").attr("src", photoURL);
        });
    }
  }

  return (
    <div style={{ textAlign: "center", color: props.clr2 }}>
      {/* <img src={photo} id="photoReturn" /> */}
      <br />
      <br />
      <p>
        Or
        <br />
        Just enter your IG handle
      </p>

      <Input
        style={{ width: "60%", backgroundColor: props.clr }}
        placeholder="IG Username"
        type="text"
        id="usernameInput"
      />
      {/* {console.log(document.getElementById("usernameInput"))} */}
      {/* <button
        onClick={() =>
          console.log(document.getElementById("usernameInput").value)
        }
      >
        Click me
      </button> */}
      <br />
      <Button
        style={{
          backgroundColor: "transparent",
          color: props.clr2,
          backgroundColor: props.clr,
          marginTop: 5
        }}
        onClick={() => getPhoto(document.getElementById("usernameInput").value)}
      >
        Get Details
      </Button>
    </div>
  );
};

export default InstaCheck;
