
import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MyButton } from "../component/myButton";
import {MyEditModal} from "../component/myEditModal";
import { MyDeleteModal } from './myDeleteModal';


// import moment from "moment";

const CommentBoxInput = () => {
    return (
        <Paper
        square
        elevation={0}
        style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: "#F5DD90",
          borderRadius: 10,
          width: '1100px',
          height: '160px',
          marginTop: '32px'
        }}
        >
            <div style = {{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "32px"}}>
                <div> somchai_jaidee </div>
                <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax={4}
                    inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
                    InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
                    style={{width:"600px"}}
                />
                </div>
                <div>
                <MyButton> Comment </MyButton>
                </div>
            </div>
        </Paper>
    );
};

const CommentBox = () => {
    return (
        <div style = {{display: "flex",flexDirection: "column",border: "2px solid #F68E5F", borderRadius: "10px", width:"1000px", marginBottom:"8px", marginLeft:"100px"}}>
            <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", paddingTop: "32px", paddingLeft:"32px", paddingRight:"32px"}}>
                <div style = {{display: "flex", flexDirection:"column"}}>
                    <div style = {{display: "flex", flexDirection:"column"}}>
                        <div style = {{marginBottom:"4px"}}> somchai_jaidee </div>
                        <div style = {{fontSize:"12px", color: "#BDBDBD"}}> 16/11/20 19:20 </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <MyEditModal />
                    <MyDeleteModal />
                </div>
            </div>
                <div style = {{width: "936px", paddingLeft:"32px", paddingRight:"32px", paddingBottom: "32px"}}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                
                </div>

        </div>
    );
};


export {
    CommentBoxInput,
    CommentBox,
};