import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Menubar from "./menubar.jsx";
import Content from "./content.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
