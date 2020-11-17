import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { MyButton, MyOutlinedButton } from "./myButton";
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
    width: "300px"
  }
}));

const MyDeleteCommentModal = (data) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [token, setToken] = React.useState('');
  const user_token = sessionStorage.getItem("token");
  console.log("comment_modal_data", data)
  console.log("token", token)
  console.log("user_token", user_token)
  const comment_id = data.data;

  const handleOpen = () => {
    setToken(user_token);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log("prepare to delete ...");
    axios.delete(backend + "/api/comment/delete/" + comment_id, {
      headers: {
      'Authorization': `Bearer ${token}`
      }
    })
    .then(window.location.reload(false));
    console.log("deleted");
  }

  return (
    <div>
      <IconButton color="secondary" style = {{backgroundColor: "#F68E5F"}} onClick={handleOpen}>
          <DeleteIcon />
        </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title"> Delete </h2>
          <p id="simple-modal-description">
              Are you sure you want to delete ?
          </p>
          <div style = {{display:"flex", justifyContent:"center", alignItems:"center", marginTop: "32px"}}>
              <MyOutlinedButton 
                style = {{marginRight: "64px"}} 
                onClick={handleClose}
              > Cancel </MyOutlinedButton>
              <MyButton onClick={() => {handleDelete();}}
              > OK </MyButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export  {MyDeleteCommentModal}