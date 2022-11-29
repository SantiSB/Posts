/**
 * types: it is an object of action types, they are used to send specific instructions according to the action executed by the user
 */
const types = {
  setPostData: "setPosts",
  createPost: "createPost",
  deletePost: "deletePost",
  updatePost: "updatePost",
  handleNotification: "handleNotification",
};

/**
 * The initial global state of our application
 */
const initialStore = {
  postsData: [{ id: "id", title: "title", body: "body", userId: "userId" }],
  handleNotification: false,
};

/**
 * This function represents the reducer of the application, depending on the action.type that it receives as a parameter, it will execute a different action that will update the "initialStore"
 * @param {Object} state Stores the initial global state of our application
 * @param {Object} action It stores the information of the action that the user executes, here we find the "type" that indicates the type of action and a "payload" that stores information that can be used to update the "initialStore"
 * @returns
 */
const storeReducer = (state, action) => {
  switch (action.type) {
    /**
     * case to load the posts when starting the application
     */
    case types.setPosts:
      return {
        ...state,
        postsData: action.payload,
      };
    /**
     * case to delete a post
     */
    case types.deletePost:
      return {
        ...state,
        postsData: state.postsData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    /**
     * case to update a post
     */
    case types.updatePost:
      return {
        ...state,
        postsData: state.postsData.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    /**
     * case to create a post
     */
    case types.createPost:
      return {
        ...state,
        postsData: state.postsData.concat(action.payload),
      };
    /**
     * case to show or hide a notification
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
