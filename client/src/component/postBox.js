
import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MyButton } from "../component/myButton";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// import moment from "moment";

const PostBoxInput = () => {
    return (
        <Paper
        square
        elevation={0}
        style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: "#F5DD90",
          borderRadius: 10,
          width: '1100px',
          height: '160px'
        }}
        >
            <div style = {{display: "flex", padding:"32px"}}>
                <div style = {{marginRight:"64px"}}> somchai_jaidee </div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax={4}
                    inputProps={{style: {fontFamily: 'Prompt'}}} // font size of input text
                    InputLabelProps={{style: {fontFamily: 'Prompt'}}} // font size of input label
                    style={{width:"600px", marginRight: "64px"}}
                />
                <MyButton> Post </MyButton>
            </div>
        </Paper>
    );
};

const PostBox = () => {
    return (
        <Paper
        square
        elevation={0}
        style={{
          display: "flex",
          flexFlow: "column",
          overflow: "auto",
          justifyContent: "flex-start",
          flexgrow: 1,
          border: "2px solid #F68E5F",
          borderRadius: 10,
          width: '1100px',
          height: '160px'
        }}
        >
            <div style = {{display: "flex", flexDirection:"column", padding:"32px"}}>
                <div style = {{display: "flex", flexDirection:"column"}}>
                    <div style = {{marginBottom:"4px"}}> somchai_jaidee </div>
                    <div style = {{marginBottom:"16px", fontSize:"12px", color: "#BDBDBD"}}> 16/11/20 19:20 </div>
                </div>
                <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div style = {{display:"flex", width:"800px", flexFlow: "column", overflow: "auto", flexgrow: 1}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </div>
                    <div>
                        <IconButton color="secondary" style = {{backgroundColor: "#F68E5F", marginRight: "16px"}}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" style = {{backgroundColor: "#F68E5F"}}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Paper>
    );
};


export {
    PostBoxInput,
    PostBox,
};