import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ApiError, Comment, CommentsState } from "../types";

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null,
    showComments: false
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<ApiError | null>) => {
            state.error = action.payload;
        },
        setShowComments: (state, action: PayloadAction<boolean>) => {
            state.showComments = action.payload;
        },

    }
});


export const { setComments, setLoading, setError, setShowComments } = commentsSlice.actions;
export default commentsSlice.reducer;