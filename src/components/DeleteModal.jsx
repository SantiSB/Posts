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
 * Esta función representa el modal para eliminar un post
 * @param {Object} cellValues representa la información de la celda que se desea editar 
 * @returns 
 */
function DeleteModal({ cellValues }) {
  /**
   * store: Es donde almacenamos los datos en el estado Global
   * dispatch: Es la función que permite enviar información al store para actualizarlo
   */
  // eslint-disable-next-line
  const [store, dispatch] = useContext(StoreContext);

  /**
   * Los useState crean un estado local
   * {Boolean} open: alamacena "true" si el modal está abierto o "false" si está cerrado
   */
  const [open, setOpen] = useState(false);

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
   * Esta función elimina el post que se está manipulando 
   * @param {Object} cellValues representa la información de la celda que se desea editar
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
