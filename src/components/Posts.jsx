import React, { useContext, useEffect } from "react";
import PostsTable from "./PostsTable";
import axios from "axios";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";
import CreateModal from "./CreateModal";
import Notification from "./Notification";
import AppBar from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  // eslint-disable-next-line
  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    async function postDataRequest() {
      await axios.get(BASE_URL).then((response) => {
        dispatch({ type: types.setPost, payload: response.data });
      });
    }
    postDataRequest();
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Posts App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 5,
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Crea, Edita y Elimina tus Post
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="lg">
          <CreateModal />
          <PostsTable />
          <Notification />
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Posts;
