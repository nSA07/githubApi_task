import { octokit } from "../utils/octikit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    issues: [],
}

export const getIssues = createAsyncThunk('issues/getIssues',
    async (data, { dispatch }) => {
        const res = await octokit.request("GET /repos/{owner}/{repo}/issues", {
                owner: data[0],
                repo: data[1],
        })
        dispatch(setIssues(res.data))
    },
)

export const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        setIssues : (state, action) => {
            state.issues = action.payload
        },
    }
})

export const { setIssues } = issuesSlice.actions;

export default issuesSlice.reducer;