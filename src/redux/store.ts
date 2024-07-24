import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";
import ownerReducer from "./ownerSlice";
import commentsReducer from "./commentsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        owner: ownerReducer,
        comments: commentsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;