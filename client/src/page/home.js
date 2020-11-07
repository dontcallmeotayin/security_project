import React, { Fragment } from "react";
import { MyButton, MyOutlinedButton, MyIconButton } from "../component/myButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NavBar from "../component/navbar";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {PostBoxInput, PostBoxInAllPost, PostBox} from "../component/postBox";
import {CommentBoxInput, CommentBox} from "../component/commentBox";
import { Link } from "react-router-dom";


class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div style = {{marginTop: "144px"}} />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <PostBoxInput />
                    <PostBoxInAllPost />
                    <PostBoxInAllPost/>
                    <PostBoxInAllPost/>
                    <PostBoxInAllPost/>
                    <PostBoxInAllPost/>
                </div>
            </div>
        );
    }
}

export default Home;