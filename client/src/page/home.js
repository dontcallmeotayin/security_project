import React from "react";
import NavBar from "../component/navbar";
import {PostBoxInput, PostBoxInAllPost} from "../component/postBox";
import axios from "axios";
import backend from "../ip";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYjBlOTgyMWMxMmZkMTNhNWE0NWNlMyIsInVzZXJuYW1lIjoidXNlcm5hbWUyIiwicGFzc3dvcmQiOiIkMmIkMTAkU3NHUGpqODZyZTIuVjQzaTB5NnBLdTRINWV2U1dwbnhjamlsWFFhc21GQ1R4UTNUeDQ2N2EiLCJ0eXBlIjoidXNlciIsIl9fdiI6MH0sImlhdCI6MTYwNTQ0Njk1OCwiZXhwIjoxNjA1NDUwNTU4fQ.rESG2AcBSRPpV3Aw7r6ZKuTmMRG4TdfGolqQdDJ15sQ"
class Home extends React.Component {
    state = { 
        data: [], 
        token: TOKEN,
        username:""
    }

    fetchData = async () => {
        try {
          const response = await axios.get(backend + "/api/blogs", {
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
      }

    render() {
        return (
            <div>
                <NavBar />
                <div style = {{marginTop: "144px"}} />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <PostBoxInput />
                    {console.log(this.state.data)}
                    {this.state.data.map((item, i) => 
                        <PostBoxInAllPost 
                            key={i} 
                            data={item}
                            fetchData={this.fetchData}
                            token={this.state.token}
                            />
                    )}
                </div>
            </div>
        );
    }
}

export default Home;