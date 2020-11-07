import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MyOutlinedButton } from "../component/myButton";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    width: "100%",
    height: '64px',
    backgroundColor: '#F68E5F',
  },
  // necessary for content to be below app bar
  toolbar: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NavBar = ({ history }) => {
    const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <div style={{ marginRight: '24px', color:'white' }}> Hi, somchai_jaidee </div>
          <MyOutlinedButton
            onClick={() => {
              history.push("/");
            }}> 
            Log out </MyOutlinedButton>
      </Toolbar>
    </AppBar>

  );
};

export default withRouter(NavBar);