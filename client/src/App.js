import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestPage from './page/TestPage';
import TestPage2 from './page/TestPage2';
import Login from './page/login';

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#F68E5F", //orange
      },
      secondary: {
        // main: "#F5DD90", // buff
        main: "#ffffff",
      },
    },
  });

const useStyles = makeStyles({
    app: {
      fontFamily: "Prompt",
      fontSize: "16px",
    },
    body: {
      padding: "30px",
      maxWidth: "414px",
      margin: "auto",
      right: 0,
    },
    admin: {
      margin: "32px 64px",
    },
  });

const App = () => {

const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route path="/" exact component={TestPage} />
            <Route path="/page2" exact component={TestPage2} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
