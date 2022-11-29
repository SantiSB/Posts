import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

/**
 * This function renders the modal to delete a post
 * @param {Object} cellValues represents the cell information you want to edit 
 * @returns 
 */
function DeleteModal({ cellValues }) {
  /**
   * store: It is where we store the data in the Global state
   * dispatch: It is the function that allows sending information to the store to update it
   */
  // eslint-disable-next-line
  const [store, dispatch] = useContext(StoreContext);

  /**
   * useStates create a local state
   * {Boolean} open: stores "true" if the modal is open or "false" if it is closed
   */
  const [open, setOpen] = useState(false);

  /**
   * This function opens the modal
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * This function closes the modal
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * This function removes the post being manipulated
   * @param {Object} cellValues represents the cell information you want to edit
   */
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
