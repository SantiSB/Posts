const types = {
  setPostData: "setPosts",
  createPost: "createPost",
  deletePost: "deletePost",
  updatePost: "updatePost",
  handleNotification: "handleNotification",
};

const initialStore = {
  postsData: [{ id: "id", title: "title", body: "body", userId: "userId" }],
  handleNotification: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setPosts:
      return {
        ...state,
        postsData: action.payload,
      };
    case types.deletePost:
      return {
        ...state,
        postsData: state.postsData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case types.updatePost:
      return {
        ...state,
        postsData: state.postsData.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case types.createPost:
      return {
        ...state,
        postsData: state.postsData.concat(action.payload),
      };
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
