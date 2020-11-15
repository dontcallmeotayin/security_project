
import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MyButton } from "../component/myButton";
import { MyLink } from "../component/myLink";
import {MyEditModal} from "../component/myEditModal";
import {MyDeleteModal} from "../component/myDeleteModal";
import moment from "moment";
import axios from "axios";
import backend from "../ip";

const PostBoxInput = () => {
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
                <div> somchai_jaidee </div>
                <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="New Post"
                    multiline
                    rowsMax={4}
                    inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
                    InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
                    style={{width:"600px"}}
                />
                </div>
                <div>
                <MyButton> Post </MyButton>
                </div>
            </div>
        </Paper>
    );
};

const PostBoxInAllPost = ({history, data, token}) => {
    const {
        owner_id,
        blog_id,
        content, 
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
                <div style = {{display: "flex",border: "2px solid #F68E5F", borderRadius: "10px", width:"1100px", justifyContent: "space-between", alignItems: "center", marginBottom: '24px'}}>
                    <div style = {{display: "flex", flexDirection:"column", padding: "36px"}}>
                    {console.log(data)}
                        <div style = {{display: "flex", flexDirection:"column"}}>
                            <div style = {{marginBottom:"4px"}}> {username} </div>
                            <div style = {{marginBottom:"16px", fontSize:"12px", color: "#BDBDBD"}}> {moment(timestamp).format('lll')} </div>
                        </div>
                        <div>
                            <div style = {{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width:"1036px"}}> 
                                {content}
                            </div>
                            <MyLink
                                // onClick={() => history.push("/blog", {data: data.blog_id})}
                                goto={"/blog"}
                                data = {data.blog_id}
                            > read more </MyLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const PostBox = (history, data, token) => {
    const {
        owner_id,
        blog_id,
        content, 
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
        <div style = {{display: "flex",flexDirection: "column",border: "2px solid #F68E5F", borderRadius: "10px", width:"1100px", marginBottom: '8px'}}>
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
                <div style = {{width: "1036px", paddingLeft:"32px", paddingRight:"32px", paddingBottom: "32px"}}> 
                    {content}
                </div>   

        </div>
    );
};


export {
    PostBoxInput,
    PostBoxInAllPost,
    PostBox,
};