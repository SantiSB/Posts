import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

function DeleteModal({ cellValues }) {
  // eslint-disable-next-line
  const [store, dispatch] = useContext(StoreContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePost = (cellValues) => {
    dispatch({ type: types.deletePost, payload: cellValues.row });
    setOpen(false);
    dispatch({ type: types.handleNotification });
  };

  return (
    <div>
      <IconButton
        onClick={handleClickOpen}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Post</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => deletePost(cellValues)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteModal;
