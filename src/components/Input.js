import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Input = () => {
  const classes = useStyles();
  const inputEl = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    let endValue = inputEl.current.value;
    console.log(endValue);
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

export default Input;
