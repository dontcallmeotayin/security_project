import React from "react";
import { TextField} from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
import { MyButton } from "../component/myButton";
import { Link } from "react-router-dom";
import axios from "axios";
import backend from "../ip";

class Login extends React.Component {
    state = { username: null, password: null, error: "" };

    login = async() => {
        const { username, password } = this.state;
        const response = await axios.post(backend + "/api/login", {
          username,
          password,
        });
        if(response?.data?.id){
          console.log(response)
          this.props.history.push({
            pathname: "/home", 
            state: {data: response.data}
          });
        } else {
          console.log("error")
          this.setState({ error: "error" });
        }
      };

    render() {
        return (
            <div
                style={{display: "flex", flexDirection: "column", 
                alignItems: "center", justifyContent: "center",
                marginTop: "10%", marginBottom: "10%"
                }} >
                <div
                    style={{width: 300, alignItems: "left"}} >
                    <h1 style={{ marginBottom: 10 }}> Welcome,</h1>
                    <div
                        style={{ color: "#F68E5F", marginBottom: 40 }}>
                        Log In
                    </div>
                </div>

                <TextField
                    style={{ marginBottom: 20, width: 300 }}
                    required
                    id="outlined-required"
                    label="Username"
                    variant="outlined"
                    inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
                    InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
                    value={this.state.username}
                    onChange={(e) => this.setState({ username: e.target.value })}
                />

                <TextField
                    style={{ marginBottom: 40, width: 300 }}
                    required
                    id="outlined-password-input-required"
                    label="Password"
                    type="password"
                    variant="outlined"
                    inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
                    InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                />
                <MyButton
                    onClick={(e) => this.login()}
                > log in </MyButton>

            </div>
        );
        }
}

export default Login;
