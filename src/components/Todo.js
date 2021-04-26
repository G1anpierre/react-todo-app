import React from "react";
import { deletetodo, modifiedTodo } from "../actions";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";

function Todo({ deleteTodo, modifiedTodo, value }) {
  const [checked, setChecked] = React.useState([0]);
  const [edit, setEdit] = React.useState(false);
  const [text, setText] = React.useState(value.name);
  const labelId = `checkbox-list-label-${value.id}`;

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleOpenCloseEdit = (id) => {
    setEdit(!edit);
  };

  const handleEditChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const saveEditChange = (event, id) => {
    if (event.key === "Enter") {
      console.log("Enter press here!");
      console.log("Im passing the Id :", id);
      modifiedTodo(id, text);
      setEdit(!edit);
    }
  };

  console.log("que es text: ", text);

  return (
    <>
      <ListItem role={undefined} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onClick={handleToggle(value)}
          />
        </ListItemIcon>
        {edit ? (
          <TextField
            id="standard-basic"
            value={text}
            onChange={handleEditChange}
            onKeyPress={(event) => saveEditChange(event, value.id)}
          />
        ) : (
          <ListItemText id={labelId} primary={`${value.name}`} type="search" />
        )}
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => handleOpenCloseEdit(value.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => handleDelete(value.id)}
          >
            <DeleteForeverIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deletetodo(id)),
    modifiedTodo: (id, text) => dispatch(modifiedTodo(id, text)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
