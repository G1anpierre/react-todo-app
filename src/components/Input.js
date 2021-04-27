import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import { connect } from "react-redux";
import { addtodo } from "../actions";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.recognition = true;
recognition.interimResults = true;
recognition.lang = "es-PE";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
      display: "flex",
      justifyContent: "center",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Input = ({ addtodo }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    search: "",
    listen: false,
  });

  const { search, listen } = state;
  function handleSubmit(event) {
    event.preventDefault();
    addtodo(search);
    setState((prevState) => ({
      ...prevState,
      search: "",
    }));
  }

  function handleChange(event) {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      search: event.target.value,
    }));
  }

  function handleLisening() {
    setState((prevState) => ({
      ...prevState,
      listen: !listen,
    }));
  }

  useEffect(() => {
    function nowListen() {
      recognition.start();

      let finalTranscript = "";
      recognition.onresult = (event) => {
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalTranscript += transcript + " ";
          else interimTranscript += transcript;
        }

        update(finalTranscript);
      };
    }
    if (listen) {
      nowListen();
    }
  }, [listen]);

  function update(word) {
    console.log(word);
    setState((prevState) => ({
      ...prevState,
      search: word,
      listen: false,
    }));
  }

  console.log("is listening : ? ", listen);

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={search}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<KeyboardVoiceIcon />}
            onClick={handleLisening}
          >
            Talk
          </Button>
        </div>
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
