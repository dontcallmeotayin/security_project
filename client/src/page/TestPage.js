import React from 'react';
import { MyButton, MyOutlinedButton } from "../component/myButton";
import { MyLink } from "../component/myLink";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NavBar from "../component/navbar";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {PostBoxInput, PostBoxInAllPost, PostBox} from "../component/postBox";
import {CommentBoxInput, CommentBox} from "../component/commentBox";
import {MyEditModal} from "../component/myEditModal";
import {MyDeleteModal} from "../component/myDeleteModal";

function App() {
  return (
    <div>
      <NavBar />
      <div style = {{marginTop:"144px"}}>
      <MyButton> log in </MyButton>
      <MyOutlinedButton> log out </MyOutlinedButton>

      <IconButton color="secondary" style = {{backgroundColor: "#F68E5F"}}>
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" style = {{backgroundColor: "#F68E5F"}}>
          <EditIcon />
        </IconButton>

      
      <PostBoxInput />
      <PostBoxInAllPost />
      <PostBox />
      <CommentBox />
      <CommentBoxInput />


      <TextField
          required
          id="outlined-required"
          label="Username"
          variant="outlined"
          inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
          InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
        />

      <TextField
          required
          id="outlined-password-input-required"
          label="Password"
          type="password"
          variant="outlined"
          inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
          InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
        />

      </div>


      <MyLink
        goto={"/home"}
      > read more ... </MyLink>

      <MyEditModal />

      <MyDeleteModal />

    </div>
    

  );
}

export default App;
