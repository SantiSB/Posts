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

function CreateModal() {
  const [store, dispatch] = useContext(StoreContext);

  const [open, setOpen] = useState(false);

  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });
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

  const handleClickOpen = () => {
    setOpen(true);
  };

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
                  aria-invalid={errors.title ? "true" : "false"} 
                  required
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
