import React from "react";
import axios from "axios";
import InstaCheck from "./InstaCheck";
import { Button, notification } from "antd";
import "./Form.css";

const Form = props => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [authorURL, setAuthorURL] = React.useState("");
  const [igURL, setIgURL] = React.useState("");
  // console.log(props);

  const openNotificationWithIcon = type => {};

  const myCallback = (
    dataFromChild,
    dataFromChild2,
    dataFromChild3,
    dataFromChild4,
    dataFromChild5
  ) => {
    setTitle(dataFromChild);
    setAuthor(dataFromChild2);
    setDescription(dataFromChild3);
    setAuthorURL(dataFromChild4);
    setIgURL(dataFromChild5);
    //f   console.log("Hello checking state" + clr);
  };

  const handleSave = type => {
    axios
      .post("http://localhost:4000/newPost", {
        title,
        author,
        description,
        authorURL,
        igURL
      })
      .then(res => {
        console.log(res.data);
      });
    notification[type]({
      message: "Success",
      description: "Blog added Successfully"
      // style: { backgroundColor: props.clr, color: props.clr2 }
    });
  };
  console.log("in form" + props.clr, props.clr2);

  return (
    <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>
      <div
        className="form-group"
        // style={{ backgroundColor: props.clr, color: props.clr2 }}
      >
        <input
          style={{ backgroundColor: props.clr, color: props.clr2 }}
          type="text"
          className="form-control"
          name="title"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          aria-describedby="titleHelpId"
          placeholder="Title"
          required
        />
        <small
          style={{ color: props.clr2 }}
          id="titleHelpId"
          className="form-text text-muted"
        >
          You entered: {title}
        </small>
      </div>
      <div className="form-group">
        <input
          style={{ backgroundColor: props.clr, color: props.clr2 }}
          type="text"
          className="form-control"
          name="author"
          id="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          aria-describedby="authorHelpId"
          placeholder="Author"
          required
        />
        <small
          style={{ backgroundColor: "transparent", color: props.clr2 }}
          id="authorHelpId"
          className="form-text text-muted"
        >
          You entered: {author}
        </small>
      </div>

      <div className="form-group">
        <input
          // onkeypress={() =>
          //   (document.getElementById("description").style.height =
          //     "((value.length + 1) * 7) + 'px'")
          // }
          style={{
            backgroundColor: props.clr,
            color: props.clr2,
            height: "auto"
          }}
          type="text"
          className="form-control"
          name="description"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          aria-describedby="descriptionHelpId"
          placeholder="Description"
          required
        />
        <small
          style={{ backgroundColor: "transparent", color: props.clr }}
          id="descriptionHelpId"
          className="form-text text-muted"
        >
          You entered: {description}
        </small>
      </div>
      <div className="form-group">
        <input
          style={{ backgroundColor: props.clr, color: props.clr2 }}
          type="text"
          className="form-control"
          name="authorigURL"
          id="authorURL"
          value={authorURL}
          onChange={e => setAuthorURL(e.target.value)}
          aria-describedby="authorURLHelpId"
          placeholder="Author URL"
          required
        />
        <small
          style={{ backgroundColor: "transparent", color: props.clr2 }}
          id="authorURLHelpId"
          className="form-text text-muted"
        >
          You entered: {authorURL}
        </small>
      </div>
      <div className="form-group">
        <input
          style={{ backgroundColor: props.clr, color: props.clr2 }}
          type="text"
          className="form-control"
          name="igURL"
          id="igURL"
          value={igURL}
          onChange={e => setIgURL(e.target.value)}
          aria-describedby="authorHelpId"
          placeholder="IG URL"
          required
        />
        <small
          style={{ backgroundColor: "transparent", color: props.clr2 }}
          id="igURLHelpId"
          className="form-text text-muted"
        >
          You entered: {igURL}
        </small>
      </div>

      <InstaCheck
        callBackFromParent={myCallback}
        clr={props.clr}
        clr2={props.clr2}
      />

      <Button
        className="btn btn-info btn-sm"
        style={{
          marginTop: "10%",
          textAlign: "center",
          color: props.clr2,
          width: "20%",
          marginLeft: "40%",
          backgroundColor: props.clr
        }}
        onClick={() => handleSave("success")}
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
