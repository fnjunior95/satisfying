import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        errorMessage: '',
    },
    reducers: {
        reducerSetLogin: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload.errorMessage;
        },
    },
});
export const {reducerSetLogin, setErrorMessage} = loginSlice.actions;
export default loginSlice.reducer;