import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../types";

const initialState = {
    name: '',
    picture: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (_state, action: PayloadAction<User>) => {
            return action.payload;
        },
        logOut: (state) => {
            state.name = '';
            state.picture = '';
        }
    }
});


export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;