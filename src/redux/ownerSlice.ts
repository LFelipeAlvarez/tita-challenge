import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ApiError, OwnerInfo, OwnerState } from "../types";

const initialState: OwnerState = {
    owner: null,
    loading: false,
    error: null,
    showOwner: false
};

export const ownerSlice = createSlice({
    name: 'owner',
    initialState,
    reducers: {
        setOwner: (state, action: PayloadAction<OwnerInfo | null>) => {
            state.owner = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<ApiError | null>) => {
            state.error = action.payload;
        },
        setShowOwner: (state, action: PayloadAction<boolean>) => {
            state.showOwner = action.payload;
        },

    }
});


export const { setOwner, setLoading, setError, setShowOwner } = ownerSlice.actions;
export default ownerSlice.reducer;