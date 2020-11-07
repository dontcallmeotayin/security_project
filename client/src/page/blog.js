import React from "react";
import NavBar from "../component/navbar";
import IconButton from '@material-ui/core/IconButton';
import {PostBox} from "../component/postBox";
import {CommentBoxInput, CommentBox} from "../component/commentBox";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class Blog extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <div style = {{marginTop: "104px", marginBottom: "24px", marginLeft: "64px"}} >
                    <IconButton color="secondary" style = {{backgroundColor: "#F68E5F"}}
                    onClick={() => {
                        this.props.history.push("/home");
                      }}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <PostBox />
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