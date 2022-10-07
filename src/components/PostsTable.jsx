import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { StoreContext } from "../store/StoreProvider";

/**
 * Esta función representa el componente que renderiza la tabla de los posts
 * @returns 
 */
function PostsTable() {
  /**
   * store: Es donde almacenamos los datos en el estado Global
   * postsData: Es la información de los post que serán renderizados
   */
  const [store] = useContext(StoreContext);
  const { postsData } = store;

  /**
   * columns: Las columnas de la tabla
   */
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 400 },
    { field: "body", headerName: "Body", width: 400 },
    { field: "userId", headerName: "User", width: 100 },
    {
      field: "Actions",
      renderCell: (cellValues) => {
        return (
          <>
            <EditModal {...{ cellValues }} />
            <DeleteModal {...{ cellValues }} />
          </>
        );
      },
    },
  ];

  /**
   * rows: Las filas de la tabla
   */
  const rows = postsData.map((post) => {
    return {
      id: post.id,
      title: post.title,
      body: post.body,
      userId: post.userId,
    };
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Paper>
    </Box>
  );
}

export default PostsTable;
