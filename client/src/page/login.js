import React, { Fragment } from "react";
import { Button, TextField, Box, TextareaAutosize } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
import { MyButton, MyOutlinedButton, MyIconButton } from "../component/myButton";

class Login extends React.Component {
    state = { username: null, password: null, error: "" };

    userLogin(value) {
        this.setState({
          name: value,
        });
        // socket.emit("login", this.state.name);
        console.log(this.state.name);
        // console.log(socket);
    }
    
    onClickLogin() {
        console.log(this.state.name);
        if (!!this.state.name) {
          this.userLogin(this.state.name);
        }
    }

    render() {
        // const { username, password, error } = this.state;
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
                />
                <MyButton> log in </MyButton>

            </div>
        );
        }
}

export default Login;
