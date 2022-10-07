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
 * Esta función representa el modal para crear un post
 * @returns
 */
function CreateModal() {
  /**
   * store: Es donde almacenamos los datos en el estado Global
   * dispatch: Es la función que permite enviar información al store para actualizarlo
   */
  const [store, dispatch] = useContext(StoreContext);

  /**
   * Los useState crean un estado local
   * {Boolean} open: alamacena "true" si el modal está abierto o "false" si está cerrado
   */
  const [open, setOpen] = useState(false);

  /**
   * useForm nos permite controlar la información del formulario facilmente, creamos unos valores por defecto que podemos actualizar con la función "handleSubmit"
   */
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  /**
   *Esta función crea un nuevo Post
   * @param {Array} data almacena la información del formulario
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
   * Esta función abre el modal
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * Esta función cierra el modal
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
