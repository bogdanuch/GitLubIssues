import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    issues: [],
    pageParams: {
        nextPage: '',
        currentPage: '1',
        prevPage: ''
    },
}

export const issuesSlice = createSlice({
    name: 'rates',
    initialState,
    reducers: {
        updateIssues: (state, action) => {
            state.issues = action.payload;
            return state
        },
        updatePageParams: (state, action) => {
            state.pageParams = action.payload;
            return state
        },
    },
});

export const {updateIssues, updatePageParams} = issuesSlice.actions;

export default issuesSlice.reducer