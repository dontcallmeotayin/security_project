import React, { useCallback, useState } from "react";
import { TextField } from "@material-ui/core";
import { MyButton } from "../component/myButton";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import backend from "../ip";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  const onClick = useCallback(async () => {
    await axios
      .post(backend + "/api/login", {
        username,
        password,
      })
      .then((res) => {
        if (res?.data?.id) {
          const { id, username, token, type } = res.data;
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("id", id);
          sessionStorage.setItem("user_name", username);
          sessionStorage.setItem("type", type);
          history.push("/home");
          history.go(0);
        } else {
          setShowErr(true);
          setErrorMsg("Username or password is incorrect");
        }
      });
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
        marginBottom: "10%",
      }}
    >
      <div style={{ width: 300, alignItems: "left" }}>
        <h1 style={{ marginBottom: 10 }}> Welcome,</h1>
        <div style={{ color: "#F68E5F", marginBottom: 40 }}>Log In</div>
      </div>

      <TextField
        style={{ marginBottom: 20, width: 300 }}
        required
        id="outlined-required"
        label="Username"
        variant="outlined"
        inputProps={{ style: { fontFamily: "Prompt" } }} // font size of input text
        InputLabelProps={{ style: { fontFamily: "Prompt" } }} // font size of input label
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <TextField
        style={{ marginBottom: 40, width: 300 }}
        required
        id="outlined-password-input-required"
        label="Password"
        type="password"
        variant="outlined"
        inputProps={{ style: { fontFamily: "Prompt" } }} // font size of input text
        InputLabelProps={{ style: { fontFamily: "Prompt" } }} // font size of input label
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <MyButton
        onClick={
          onClick
        }
      >
        log in
      </MyButton>
    </div>
  );
};
export default Login;