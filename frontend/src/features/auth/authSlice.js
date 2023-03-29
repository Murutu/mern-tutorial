import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user : null,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: () => {}
})

export const {reset} = authSlice.actions
export default authSlice.reducer


/*
What we will put in our reducers will not be asynchronous/thunk functions instead the will go to the extraReducers
What will be in our reducers: {} will be just a regular reducer 

reset: (state) => {} => will allow us to reset the state back to its default values

when we have reducers we have to export them using authSlice.actions
*/