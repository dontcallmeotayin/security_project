
import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MyButton } from "../component/myButton";
import {MyEditModal} from "../component/myEditModal";
import {MyDeleteModal} from "../component/myDeleteModal";
import moment from "moment";
import axios from "axios";
import backend from "../ip";
import { Link } from 'react-router-dom'

const token = sessionStorage.getItem("token");
const id = sessionStorage.getItem("id");
const user_name = sessionStorage.getItem("user_name");
const type = sessionStorage.getItem("type");

const PostBoxInput = () => {
    const [content, setContent] = useState("");
    const handleAddPost = () => {
        const data = {content: content, owner_id: id}
        axios
            .post(backend + "/api/blog", {
              data,  
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                  }
            })
            .then(window.location.reload(false));
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
          marginBottom: '48px'
        }}
        >
            <div style = {{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "32px"}}>
                <div> {user_name} </div>
                <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="New Post"
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
                <MyButton onClick={handleAddPost}> Post </MyButton>
                </div>
            </div>
        </Paper>
    );
};

const PostBoxInAllPost = ({history, data}) => {
    const {
        owner_id,
        blog_id,
        content, 
        timestamp,
        is_deleted,
        fetchData
    } = data;
    const [username, setUsername] = React.useState("")

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
                <div style = {{display: "flex",border: "2px solid #F68E5F", borderRadius: "10px", width:"1100px", justifyContent: "space-between", alignItems: "center", marginBottom: '24px'}}>
                    <div style = {{display: "flex", flexDirection:"column", padding: "36px"}}>
                        <div style = {{display: "flex", flexDirection:"column"}}>
                            <div style = {{marginBottom:"4px"}}> {username} </div>
                            <div style = {{marginBottom:"16px", fontSize:"12px", color: "#BDBDBD"}}> {moment(timestamp).format('lll')} </div>
                        </div>
                        <div>
                            <div style = {{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width:"1036px"}}> 
                                {content}
                            </div>
                            <Link
                                underline="always"
                                style = {{
                                    cursor:"pointer",
                                    color:"#F68E5F",
                                }}
                                to = {{pathname: `/blog/${data._id}`,
                                        state: data}}
                            > Read more
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const PostBox = (data) => {
    const [username, setUsername] = React.useState("")
    const owner_id = data.owner_id
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
        <div style = {{display: "flex",flexDirection: "column",border: "2px solid #F68E5F", borderRadius: "10px", width:"1100px", marginBottom: '8px'}}>
            <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", paddingTop: "32px", paddingLeft:"32px", paddingRight:"32px"}}>
                <div style = {{display: "flex", flexDirection:"column"}}>
                    <div style = {{display: "flex", flexDirection:"column"}}>
                        <div style = {{marginBottom:"4px"}}> {username} </div>
                        <div style = {{fontSize:"12px", color: "#BDBDBD"}}> {moment(data.data.timestamp).format('lll')} </div>
                    </div>
                </div>
                {(type === "moderator" || owner_id == id ) &&(
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <MyEditModal 
                        data ={data.data}/>
                        <MyDeleteModal
                        data ={data.data._id} />
                    </div>
                )}
            </div>
                <div style = {{width: "1036px", paddingLeft:"32px", paddingRight:"32px", paddingBottom: "32px", wordWrap:"break-word"}}> 
                {data.data.content}
                </div>   

        </div>
    );
};


export {
    PostBoxInput,
    PostBoxInAllPost,
    PostBox,
};