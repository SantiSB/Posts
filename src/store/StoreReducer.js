/**
 * types: es un objeto de tipos de accion, sirven para enviar instrucciones especificas de acuerdo a la acción que ejecute el usuario
 */
const types = {
  setPostData: "setPosts",
  createPost: "createPost",
  deletePost: "deletePost",
  updatePost: "updatePost",
  handleNotification: "handleNotification",
};

/**
 * El estado global inicial de nuestra aplicación
 */
const initialStore = {
  postsData: [{ id: "id", title: "title", body: "body", userId: "userId" }],
  handleNotification: false,
};

/**
 * Esta función representa el reducer de la aplicación, dependiendo del action.type que reciba por parametro ejecutará una acción diferente que actualizara el "initialStore"
 * @param {Object} state Almacena el estado global inicial de nuestra aplicación
 * @param {Object} action Almacena la información de la acción que ejecuta el usuario, aquí encontramos el "type" que indica el tipo de acción y un "payload" que almacena información que puede ser utilizada para actualizar el "initialStore"
 * @returns
 */
const storeReducer = (state, action) => {
  switch (action.type) {
    /**
     * case para cargar los post al iniciar la aplicación
     */
    case types.setPosts:
      return {
        ...state,
        postsData: action.payload,
      };
    /**
     * case para eliminar un post
     */
    case types.deletePost:
      return {
        ...state,
        postsData: state.postsData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    /**
     * case para actualizar un post
     */
    case types.updatePost:
      return {
        ...state,
        postsData: state.postsData.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    /**
     * case para crear un post
     */
    case types.createPost:
      return {
        ...state,
        postsData: state.postsData.concat(action.payload),
      };
    /**
     * case para mostrar u ocultar una notificación
     */
    case types.handleNotification:
      return {
        ...state,
        handleNotification: !state.handleNotification,
      };

    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
