
import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MyButton } from "../component/myButton";
import {MyEditModal} from "../component/myEditModal";
import { MyDeleteModal } from './myDeleteModal';
import moment from "moment";
import axios from "axios";
import backend from "../ip";

const api = axios.create(
    {
      withCredentials: true,
    }
  );

const token = sessionStorage.getItem("token");
const id = sessionStorage.getItem("id");
const user_name = sessionStorage.getItem("user_name");


const CommentBoxInput = () => {
    const [content, setContent] = useState("")
    const handleAddComment = () => {
        const data = {comment: content, owner_id: id}
        console.log(data)
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
                <div> somchai_jaidee </div>
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

const CommentBox = ({history, data, token}) => {
    const {
        owner_id,
        blog_id,
        comment_id,
        text, 
        timestamp,
        is_deleted
    } = data;

    const [username, setUsername] = React.useState("")

    const getUsername = async () => {
        const response = await axios.get(backend + "/api/user/" + owner_id, {
            headers: {
            'Authorization': `Bearer ${token}`
            }
    });
        const { success, data } = response.data;
        console.log(data.username)
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
                                <div style = {{fontSize:"12px", color: "#BDBDBD"}}> {moment(timestamp).format('lll')} </div>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <MyEditModal />
                            <MyDeleteModal />
                        </div>
                    </div>
                        <div style = {{width: "936px", paddingLeft:"32px", paddingRight:"32px", paddingBottom: "32px"}}> {text} </div>
                </div>
            )}
        </div>
    );
};


export {
    CommentBoxInput,
    CommentBox,
};
