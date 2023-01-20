import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainLayout: {
        isLoading: true,
    },
}

const approute = createSlice({
    name: 'approute',
    initialState: initialState,
    reducers: {
        setDoneLoading: (state) => {
            state.mainLayout.isLoading = false
        },
    },
})

export default approute.reducer
export const { setDoneLoading } = approute.actions
