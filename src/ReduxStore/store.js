import { configureStore } from '@reduxjs/toolkit';
import reducer from './issuesSlice'

export const store = configureStore({
    reducer: {
        slice: reducer
    }
})