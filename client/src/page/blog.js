import React from "react";
import NavBar from "../component/navbar";
import IconButton from '@material-ui/core/IconButton';
import {PostBox} from "../component/postBox";
import {CommentBoxInput, CommentBox} from "../component/commentBox";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from "axios";
import backend from "../ip";

// const MOCK_DATA = [
//     {owner_id: 1, comment_id: 1, text: "asdfghjkl", timestamp: Date.now()},
//     {owner_id: 2, comment_id: 2, text: "qwertyuiop[]", timestamp: Date.now()},
//     {owner_id: 3, comment_id: 3, text: "zxcvbnm,./", timestamp: Date.now()},
//     {owner_id: 4, comment_id: 4, text: "asdfghjkl", timestamp: Date.now()}
// ]

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYjBlOTgyMWMxMmZkMTNhNWE0NWNlMyIsInVzZXJuYW1lIjoidXNlcm5hbWUyIiwicGFzc3dvcmQiOiIkMmIkMTAkU3NHUGpqODZyZTIuVjQzaTB5NnBLdTRINWV2U1dwbnhjamlsWFFhc21GQ1R4UTNUeDQ2N2EiLCJ0eXBlIjoidXNlciIsIl9fdiI6MH0sImlhdCI6MTYwNTQ1MTMwNywiZXhwIjoxNjA1NDU0OTA3fQ.vAmvnW9nbksSHI4Hnkb5Z_Unvg_z86nwj5hhbSuGSuE"
class Blog extends React.Component {
    state = { 
        data: [], 
        token: "",
        username:""
    }

    fetchData = async () => {
        try {
          const response = await axios.get(backend + "/api/comment", {
                headers: {
                  'Authorization': `Bearer ${this.state.token}`
                }
          });
          const { success, data } = response.data;
          if (success) {
            console.log("aaa",data.token)
            this.setState({ data: data, token: data.token, username: data.username });
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetchBlog = async () => {
        console.log("Hi", this.state.Bid);
        try {
          const response = await axios.get(backend + "/api/blog/" + this.state.Bid, {
                headers: {
                  'Authorization': `Bearer ${this.state.token}`
                }
          });
          const { success, data } = response.data;
          console.log(data)
          if (success) {
            this.setState({ data: data });
          }
        } catch (e) {
          console.log(e);
        }
      };
    

    componentDidMount() {
        this.fetchData();
        this.fetchBlog();
      }

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
                    {this.state.data.map((item, i) => 
                        <CommentBox
                            key={i} 
                            data={item}
                            fetchData={this.fetchData}
                            token={this.state.token}/>
                    )}
                    <CommentBoxInput />
                </div>
            </div>
        );
    }
}

export default Blog;