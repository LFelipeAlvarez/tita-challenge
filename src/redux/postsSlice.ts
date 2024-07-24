import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ApiError, PostsState, PostT } from "../types";

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
    currentTag: 'water'
};

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<PostT[]>) => {
            state.posts = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<ApiError | null>) => {
            state.error = action.payload;
        },
        setTag: (state, action: PayloadAction<string>) => {
            state.currentTag = action.payload;
        },

    }
});


export const { setPosts, setLoading, setError, setTag } = postSlice.actions;
export default postSlice.reducer;