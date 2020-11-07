import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import { MyButton, MyOutlinedButton } from "./myButton";


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

const MyEditModal = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          variant="outlined"
          inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
          InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
        />
          <div style = {{display:"flex", justifyContent:"center", alignItems:"center", marginTop: "32px"}}>
              <MyOutlinedButton style = {{marginRight: "64px"}}> Cancel </MyOutlinedButton>
              <MyButton> OK </MyButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export  {MyEditModal}