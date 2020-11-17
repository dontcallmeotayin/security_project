import React, {useState, useEffect} from "react";
import NavBar from "../component/navbar";
import IconButton from '@material-ui/core/IconButton';
import {PostBox} from "../component/postBox";
import {CommentBoxInput, CommentBox} from "../component/commentBox";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory } from "react-router-dom";
import axios from "axios";
import backend from "../ip";


const Blog = (blog1) => {
  const token = sessionStorage.getItem("token");
  const myBlog = blog1.location.state; 
  const [commentData, setCommentData] = useState([]);
  const history = useHistory();

    const fetchData = async () => {
        try {
          const response = await axios.get(backend + "/api/blog/comments/" + myBlog._id, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
          });
          const { success, data } = response.data;
          if (response.data) {
            setCommentData(response.data['data']);
          }
        } catch (e) {
          console.log(e);
        }
      };

      useEffect(() => {
        fetchData();
      },[])

      if(commentData == "no comments"){
        return(
          <div>
                <NavBar />
                <div style = {{marginTop: "104px", marginBottom: "24px", marginLeft: "64px"}} >
                    <IconButton color="secondary" style = {{backgroundColor: "#F68E5F"}}
                    onClick={() => {
                        history.push("/home");
                      }}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <PostBox 
                      data={myBlog}
                      />
                    <CommentBoxInput 
                      data = {myBlog}/>
                </div>
            </div>
        )
      } else {
        return (
            <div>
                <NavBar />
                <div style = {{marginTop: "104px", marginBottom: "24px", marginLeft: "64px"}} >
                    <IconButton color="secondary" style = {{backgroundColor: "#F68E5F"}}
                    onClick={() => {
                        history.push("/home");
                      }}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <PostBox 
                      data={myBlog}
                      />
                  {commentData.map((item, i) => 
                      <CommentBox
                        key={i} 
                        data={item}
                        fetchData={fetchData}
                        token={token}/>
                    )}
                    <CommentBoxInput
                    data = {myBlog}/>
                </div>
            </div>
        );
    }
}

export default Blog;