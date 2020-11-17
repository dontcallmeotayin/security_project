import React, { useState, useEffect } from "react";
import NavBar from "../component/navbar";
import IconButton from "@material-ui/core/IconButton";
import { CommentBoxInput, CommentBox } from "../component/commentBox";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import axios from "axios";
import backend from "../ip";
import moment from "moment";
import { MyEditModal } from "../component/myEditModal";
import { MyDeleteModal } from "../component/myDeleteModal";

const Blog = (blog1) => {
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  const type = sessionStorage.getItem("type");

  const myBlog = blog1.location.state;
  console.log("myBlog", myBlog);
  const [commentData, setCommentData] = useState([]);
  const [blogData, setBlogData] = useState("");
  const history = useHistory();
  const [username, setUsername] = React.useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        backend + "/api/blog/comments/" + myBlog._id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { success, data } = response.data;
      if (response.data) {
        setCommentData(response.data["data"]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchBlog = async () => {
    try {
      const response = await axios.get(backend + "/api/blog/" + myBlog._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { success, data } = response.data;
      console.log("postpost", response.data.data.owner_id);
      if (response.data) {
        setBlogData(response.data.data);
        console.log(blogData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getUsername = async () => {
    const response = await axios.get(backend + "/api/user/" + myBlog.owner_id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { success, data } = response.data;
    if (success) {
      setUsername(data.username);
    }
  };

  useEffect(() => {
    fetchData();
    fetchBlog();
    getUsername();
  }, []);

  if (commentData == "no comments") {
    return (
      <div>
        <NavBar />
        <div
          style={{
            marginTop: "104px",
            marginBottom: "24px",
            marginLeft: "64px",
          }}
        >
          <IconButton
            color="secondary"
            style={{ backgroundColor: "#F68E5F" }}
            onClick={() => {
              history.push("/home");
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <PostBox 
                      data={blogData}
                      /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid #F68E5F",
              borderRadius: "10px",
              width: "1100px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                paddingTop: "32px",
                paddingLeft: "32px",
                paddingRight: "32px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "4px" }}> {username} </div>
                  <div style={{ fontSize: "12px", color: "#BDBDBD" }}>
                    {" "}
                    {moment(myBlog._idtimestamp).format("lll")}{" "}
                  </div>
                </div>
              </div>
              {(type === "moderator" || myBlog.owner_id == id) && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <MyEditModal data={myBlog} />
                  <MyDeleteModal data={myBlog._id} />
                </div>
              )}
            </div>
            <div
              style={{
                width: "1036px",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingBottom: "32px",
                wordWrap: "break-word",
              }}
            >
              {myBlog.content}
            </div>
          </div>
          <CommentBoxInput data={myBlog} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div
          style={{
            marginTop: "104px",
            marginBottom: "24px",
            marginLeft: "64px",
          }}
        >
          <IconButton
            color="secondary"
            style={{ backgroundColor: "#F68E5F" }}
            onClick={() => {
              history.push("/home");
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <PostBox data={blogData} /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid #F68E5F",
              borderRadius: "10px",
              width: "1100px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                paddingTop: "32px",
                paddingLeft: "32px",
                paddingRight: "32px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "4px" }}> {username} </div>
                  <div style={{ fontSize: "12px", color: "#BDBDBD" }}>
                    {" "}
                    {moment(myBlog._idtimestamp).format("lll")}{" "}
                  </div>
                </div>
              </div>
              {(type === "moderator" || myBlog.owner_id == id) && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <MyEditModal data={myBlog} />
                  <MyDeleteModal data={myBlog._id} />
                </div>
              )}
            </div>
            <div
              style={{
                width: "1036px",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingBottom: "32px",
                wordWrap: "break-word",
              }}
            >
              {myBlog.content}
            </div>
          </div>
          {commentData.map((item, i) => (
            <CommentBox
              key={i}
              data={item}
              fetchData={fetchData}
              token={token}
            />
          ))}
          <CommentBoxInput data={myBlog} />
        </div>
      </div>
    );
  }
};

export default Blog;
