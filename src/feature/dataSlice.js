import { octokit } from "../utils/octikit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

export const getData = createAsyncThunk('data/getData',
    async (data, { dispatch }) => {
        const res = await octokit.request("GET /repos/{owner}/{repo}", {
                owner: data[0],
                repo: data[1],
        })
        dispatch(setData(res.data))
    },
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData : (state, action) => {
            state.data = action.payload
        },
    }
})

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;