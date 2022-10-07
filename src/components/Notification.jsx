import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

/**
 * Alert: componente que será renderizado cuando se realice una acción en alguno de los formularios
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/**
 * Esta función representa el componente que notificará al usuario el exito del proceso realizado en alguno de los formularios
 * @returns 
 */
function Notification() {
  /**
   * store: Es donde almacenamos los datos en el estado Global
   * dispatch: Es la función que permite enviar información al store para actualizarlo
   */
  const [store, dispatch] = useContext(StoreContext);

  /**
   * Esta función cierra la notificación cuando se hace click en el icono de cerrar
   * @param {String} reason informa si se ha dado click en el icono de cerrar 
   * @returns 
   */
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: types.handleNotification });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={store.handleNotification}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Successfully done
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Notification;
