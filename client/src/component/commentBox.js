
import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MyButton } from "../component/myButton";
import {MyEditModal} from "../component/myEditModal";
import { MyDeleteCommentModal } from './myDeleteCommentModal';
import moment from "moment";
import axios from "axios";
import backend from "../ip";

const token = sessionStorage.getItem("token");
const id = sessionStorage.getItem("id");
const user_name = sessionStorage.getItem("user_name");

const CommentBoxInput = (info) => {
    const [content, setContent] = useState("")
    const handleAddComment = () => {
        const data = {comment: content, owner_id: id, blog_id: info.data._id}
        axios
            .post(backend + "/api/comment", {
              data
            },
            {
              headers: {
                'Authorization': `Bearer ${token}`,
              }
            })
            .then(window.location.reload(false));
            console.log("new comment ja!")
      };
    
    return (
        <Paper
        square
        elevation={0}
        style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: "#F5DD90",
          borderRadius: 10,
          width: '1100px',
          height: '160px',
          marginTop: '32px'
        }}
        >
            <div style = {{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "32px"}}>
                <div> {user_name} </div>
                <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Your Comment"
                    multiline
                    rowsMax={4}
                    inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
                    InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
                    value = {content}
                    onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    style={{width:"600px"}}
                />
                </div>
                <div>
                <MyButton onClick={handleAddComment}> Comment </MyButton>
                </div>
            </div>
        </Paper>
    );
};

const CommentBox = (data) => {
    // const {
    //     owner_id,
    //     blog_id,
    //     // comment_id,
    //     text, 
    //     timestamp,
    //     is_deleted
    // } = data;
    console.log("comment", data)
    const [username, setUsername] = React.useState("")
    const owner_id = data.data.owner_id
    const is_deleted = data.data.is_deleted

    const getUsername = async () => {
        const response = await axios.get(backend + "/api/user/" + owner_id, {
            headers: {
            'Authorization': `Bearer ${token}`
            
            }
    });
        const { success, data } = response.data;
        if (success) {
            setUsername(data.username)
        }
    };

    useEffect(() => {
        getUsername();
    }, [])

    return (
        <div>
            {!is_deleted && (
                <div style = {{display: "flex",flexDirection: "column",border: "2px solid #F68E5F", borderRadius: "10px", width:"1000px", marginBottom:"8px", marginLeft:"100px"}}>
                    <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", paddingTop: "32px", paddingLeft:"32px", paddingRight:"32px"}}>
                        <div style = {{display: "flex", flexDirection:"column"}}>
                            <div style = {{display: "flex", flexDirection:"column"}}>
                                <div style = {{marginBottom:"4px"}}> {username} </div>
                                <div style = {{fontSize:"12px", color: "#BDBDBD"}}> {moment(data.data.timestamp).format('lll')} </div>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <MyEditModal />
                            <MyDeleteCommentModal
                            data ={data.data._id} />
                        </div>
                    </div>
                        <div style = {{width: "936px", paddingLeft:"32px", paddingRight:"32px", paddingBottom: "32px"}}> {data.data.comment} </div>
                </div>
            )}
        </div>
    );
};


export {
    CommentBoxInput,
    CommentBox,
};
