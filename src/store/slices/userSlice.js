import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: null,
    isAuthenticated: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = null
            state
        },
        register: (state, action) => {
            state.userInfo = action.payload
            state.isAuthenticated = true
        }
    },
})

export const { login, logout, register } = userSlice.actions

export default userSlice.reducer