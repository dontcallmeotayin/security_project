import React, { Fragment } from "react";
import { MyButton, MyOutlinedButton, MyIconButton } from "../component/myButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NavBar from "../component/navbar";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {PostBoxInput, PostBoxInAllPost, PostBox} from "../component/postBox";
import {CommentBoxInput, CommentBox} from "../component/commentBox";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";

class Blog extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <div style = {{marginTop: "104px", marginBottom: "24px"}} >
                    <IconButton color="secondary" style = {{backgroundColor: "#F68E5F"}}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <PostBoxInAllPost />
                    <CommentBox />
                    <CommentBox />
                    <CommentBox />
                    <CommentBoxInput />
                </div>
            </div>
        );
    }
}

export default Blog;