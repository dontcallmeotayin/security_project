
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "@material-ui/core/";

const MyLink1 = ({ children, goto, history, style }) => {
  return (<Link
    underline="always"
    color="primary"
    style = {{
        cursor:"pointer"
    }}
    onClick={() => {
      history.push(goto);
    }}
  >
    {children}
  </Link>)
}
const MyLink = withRouter(MyLink1)
export { MyLink };