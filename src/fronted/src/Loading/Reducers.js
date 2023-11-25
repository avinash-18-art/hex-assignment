import { createReducer } from '@reduxjs/toolkit'
const initalState = {}

export const dataReducer = createReducer(initalState, {
    dataRequest: (state, action) => {
        state.loading = true
    },
    dataSuccess: (state, action) => {
        state.loading = false
        state.data = action.payload
    },
    dataFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    clearErrors: (state) => { state.error = null },
    clearMessage: (state) => { state.message = null }
})