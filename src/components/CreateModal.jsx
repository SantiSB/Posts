import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { types } from "../store/StoreReducer";
import { StoreContext } from "../store/StoreProvider";

/**
 * This function renders the modal to create a post
 * @returns
 */
function CreateModal() {
  /**
   * store: It is where we store the data in the Global state
   * dispatch: It is the function that allows sending information to the store to update it
   */
  const [store, dispatch] = useContext(StoreContext);

  /**
   * useState create a local state
   * {Boolean} open: stores "true" if the modal is open or "false" if it is closed
   */
  const [open, setOpen] = useState(false);

  /**
   * useForm allows us to control the form information easily, we create some default values that we can update with the "handleSubmit" function
   */
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  /**
   *This function creates a new Post
   * @param {Array} data stores the form information
   */
  const onSubmit = (data) => {
    var newPost = {
      id: store.postsData.length + 1,
      title: data.title,
      body: data.body,
      userId: Math.round(Math.random() * 10),
    };
    dispatch({ type: types.createPost, payload: newPost });
    setOpen(false);
    dispatch({ type: types.handleNotification });
  };

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

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{ mb: 2 }}>
        Create Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>
          <form>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="standard"
                  {...field}
                />
              )}
            />
            <Controller
              name="body"
              control={control}
              render={({ field }) => (
                <TextField
                  autoFocus
                  margin="dense"
                  id="comment"
                  label="Comment"
                  type="text"
                  fullWidth
                  variant="standard"
                  {...field}
                />
              )}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateModal;
