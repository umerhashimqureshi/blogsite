import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Icon, Popconfirm, message } from "antd";
import Form from "./Form";

const Posts = props => {
  var postCount;
  const [post, setPost] = useState([]);
  const [blogClr, setBlogClr] = useState("black");
  // const [val, setVal] = useState(true);
  function confirm(e) {
    console.log(e);
  }

  function cancel(e) {
    console.log(e);
    message.error("Canceled!");
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/showAll")
      .then(response => {
        setPost(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    if (props.clr == "#dcdcdc") {
      setBlogClr("white");
      // setVal(true);
    } else if (props.clr == "#121212") {
      setBlogClr("black");
      // setVal(!val);
    }
  });

  const handleDelete = ID => {
    axios
      .delete("http://localhost:4000/delete/" + ID)
      .then(() => console.log("Deleted!"))
      .then(message.success("Post Deleted!"))
      .catch(err => {
        console.log(err);
      });
  };

  // console.log(postCount);

  // if (val) {
  //   setVal(false);
  //   return <Form clr={props.clr} clr2={props.clr2} />;
  // }

  return (
    <div
      style={{
        width: "90%",
        backgroundColor: props.clr,
        margin: "auto",
        marginTop: 15,
        color: props.clr2
      }}
    >
      <Link>
        <h4 style={{ color: props.clr2, textAlign: "center", padding: 30 }}>
          The Food Blog
        </h4>
      </Link>

      {/* <div className="d-flex flex-wrap justify-content-center"> */}
      <div
        style={{
          padding: 15
        }}
      >
        {post.reverse().map((post, i) => {
          return (
            <div key={i} style={{ width: "80%", margin: "auto" }}>
              {/* <div className="card"> */}
              <div
                style={{
                  backgroundColor: blogClr,
                  color: props.clr2,
                  padding: 15,
                  marginTop: 25,
                  borderRadius: "10px"
                }}
              >
                <b style={{ color: props.clr2, fontSize: "x-large" }}>
                  {post.title}
                </b>
                <br />
                <b style={{ marginTop: 10, fontSize: "medium" }}>
                  <a
                    target="_blank"
                    style={{ color: props.clr2 }}
                    href={post.authorURL}
                  >
                    <u>{post.author}</u>
                  </a>
                </b>
                <br />
                <br />
                {post.description}
                <br />
                <div
                  style={{
                    marginLeft: 50,
                    marginTop: 30
                  }}
                >
                  <Icon style={{ fontSize: "x-large" }} type="instagram" />
                  <a
                    style={{
                      backgroundColor: "transparent",
                      color: props.clr2,
                      borderColor: "transparent",
                      marginTop: 20,
                      padding: 10
                    }}
                    href={post.igURL}
                    target="_blank"
                  >
                    Instagram
                  </a>
                  <Popconfirm
                    style={{ color: props.clr2, backgroundColor: props.clr }}
                    title="Are you sure delete this task?"
                    onConfirm={() => handleDelete(post._id)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="danger">Delete</Button>
                  </Popconfirm>
                </div>
              </div>
              {/* {postCount++} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
