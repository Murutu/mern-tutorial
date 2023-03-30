import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user : null,
    isSuccess: false,
    isLoading: false,
    message: ""
}

/*
Register user 
*/
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    }catch(error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



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
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state,action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer


/*
What we will put in our reducers will not be asynchronous/thunk functions instead the will go to the extraReducers
What will be in our reducers: {} will be just a regular reducer 

reset: (state) => {} => will allow us to reset the state back to its default values

when we have reducers we have to export them using authSlice.actions
asychThunk will deal with our backend using async operations
*/