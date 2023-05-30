import { IUser } from "../models/IUser";
import { IUserState } from "../models/IUserState";
import { createSlice,createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import { USERS_API } from "../constants/api";



const inititalState: IUserState = {
    data: null,
    error: null,
    loading: false
}


export const getUsers = createAsyncThunk(
    "users",
    async (data , thunkAPI) => {
        try {
            let res = await axios.get<IUser[]>(USERS_API);
            
            return res.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
const userSlice = createSlice({
    name: "users",
    initialState:inititalState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(getUsers.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(getUsers.fulfilled,(state,action:PayloadAction<IUser[]>)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(getUsers.rejected,(state,action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload
        })
    }

})

export default userSlice.reducer