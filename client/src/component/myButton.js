
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const MyButton = withStyles({
  root: {
    background: "linear-gradient( #F68E5F 30%, #F68E5F 90%)",
    borderRadius: 10,
    // border: "1px solid white",
    width: "120px",
    color: "#FEFFEA",
    paddingRight: "24px",
    paddingLeft: "24px"
  },
  label: {
    textTransform: "capitalize",
    fontFamily: "Prompt",
    fontSize: "16px"
  }
})(Button);

const MyOutlinedButton = withStyles({
    root: {
      background: "linear-gradient( white 30%, white 90%)",
      borderRadius: 10,
      border: "1px solid #F68E5F",
      width: "120px",
      color: "#F68E5F",
      paddingRight: "24px",
      paddingLeft: "24px"
    },
    label: {
      textTransform: "capitalize",
      fontFamily: "Prompt",
      fontSize: "16px"
    }
  })(Button);

export {
  MyButton,
  MyOutlinedButton,
};