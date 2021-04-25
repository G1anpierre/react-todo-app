import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addtodo } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Input = ({ addtodo }) => {
  const classes = useStyles();
  const inputEl = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    let endValue = inputEl.current.value;
    console.log(endValue);
    addtodo(endValue);
  }

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          inputRef={inputEl}
        />
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addtodo: (endValue) => dispatch(addtodo(endValue)),
  };
};

export default connect(null, mapDispatchToProps)(Input);
