import React from "react";
import NavBar from "../component/navbar";
import {PostBoxInput, PostBoxInAllPost} from "../component/postBox";


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