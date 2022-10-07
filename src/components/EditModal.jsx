import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

/**
 * Esta función representa el modal para editar un post
 * @param {Object} cellValues representa la información de la celda que se desea editar 
 * @returns 
 */
function EditModal({ cellValues }) {
  // eslint-disable-next-line
  const [store, dispatch] = useContext(StoreContext);

  /**
   * Los useState crean un estado local
   * {Boolean} open: alamacena "true" si el modal está abierto o "false" si está cerrado
   * {String} title: almacena el titulo que hay en el formulario
   * {String} body: almacena el comentario que hay en el formulario
   */
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(cellValues.row.title);
  const [body, setBody] = useState(cellValues.row.body);

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

  /**
   * Esta función actualiza el post que se está editando 
   * @param {Object} cellValues representa la información de la celda que se desea editar
   */
  const updatePost = (cellValues) => {
    var newPost = {
      id: cellValues.row.id,
      title: title,
      body: body,
      userId: cellValues.row.userId,
    };

    dispatch({ type: types.updatePost, payload: newPost });
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
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            fullWidth
            variant="standard"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => updatePost(cellValues)}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditModal;
