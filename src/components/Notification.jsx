import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

/**
 * Alert: component that will be rendered when an action is performed on any of the forms
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/**
 * This function represents the component that will notify the user of the success of the process carried out in any of the forms.
 * @returns 
 */
function Notification() {
  /**
   * store: It is where we store the data in the Global state
    * dispatch: It is the function that allows sending information to the store to update it
   */
  const [store, dispatch] = useContext(StoreContext);

  /**
   * This function closes the notification when the close icon is clicked
   * @param {String} reason informs if the close icon has been clicked 
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
