import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import { MyButton, MyOutlinedButton } from "./myButton";
import {useHistory } from "react-router-dom";

import axios from "axios";
import backend from "../ip";

function getModalStyle() {
  const top = 0;
  const left = 0; 

  return {
    float: left,
    left: "50%",
    top: "50%",
    transform: `translate(-${50}%, -${50}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "500px"
  }
}));

const MyEditModal = (data) => {
  const classes = useStyles();
  const history = useHistory();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  const blog_id = data.data._id;
  const [content, setContent] = useState('');
  const handleOpen = () => {
    setOpen(true);
    setContent(data.data.content);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    const data = {content: content, owner_id: id}
    axios.put(backend + "/api/blog/update/" + blog_id, {
      data,
    },
    {
      headers: {
      'Authorization': `Bearer ${token}`
      }
    })
    // history.push("/home");
    .then(window.location.reload(false));
    console.log("updated")
  }

  return (
    <div>
      <IconButton color="secondary" style = {{backgroundColor: "#F68E5F", marginRight: "16px"}} onClick={handleOpen}>
          <EditIcon />
        </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title"> Edit </h2>
          <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          fullWidth
          rows={8}
          defaultValue={content}
          value = {content}
          variant="outlined"
          inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
          InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
          onChange={e => setContent(e.target.value)}
        />
          <div style = {{display:"flex", justifyContent:"center", alignItems:"center", marginTop: "32px"}}>
              <MyOutlinedButton style = {{marginRight: "64px"}} onClick={handleClose}> Cancel </MyOutlinedButton>
              <MyButton onClick={handleUpdate}> OK </MyButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export  {MyEditModal}