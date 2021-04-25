import React from "react";
import { deletetodo } from "../actions";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

import { connect } from "react-redux";

function Todo({ deleteTodo, value }) {
  const [checked, setChecked] = React.useState([0]);
  const labelId = `checkbox-list-label-${value}`;

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

  return (
    <>
      <ListItem role={undefined} dense button onClick={handleToggle(value)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`${value.name}`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
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
  };
};

export default connect(null, mapDispatchToProps)(Todo);
