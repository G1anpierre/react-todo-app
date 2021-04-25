import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Todo from "../components/Todo";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Todos({ todos }) {
  const classes = useStyles();

  console.log("Que es todos: ", todos);
  return (
    <List className={classes.root}>
      {todos.map((value) => {
        return <Todo value={value} key={value.id} />;
      })}
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, null)(Todos);
