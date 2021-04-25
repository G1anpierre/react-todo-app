import React from "react";
import Header from "../components/Header";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Input from "../components/Input";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    maxWidth: "sm",
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.containerStyle}>
        <Input />
      </Container>
    </>
  );
};

export default Main;
