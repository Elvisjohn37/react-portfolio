import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'home',
    initialState: { isRendered: false },
    reducers: {
        updateRenderStatus: (state, action) => {
            state.isRendered = action.payload
        },
    },
})

export default slice.reducer

export const { updateRenderStatus } = slice.actions
