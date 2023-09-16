import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: "checking",
    user: {}, 
    errorMessage: undefined
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state)=>{
        state.status = "checking"
        state.user = {}
        state.errorMessage = undefined
    },
    onLogin: (state, {payload})=>{
        state.status = "authenticated",
        state.user = payload
        state.errorMessage = undefined
    },
    onLogout:(state, {payload})=>{
      state.status = payload
      state.user = {}
      state.errorMessage = undefined
    },
    clearErrorMessage:(state)=>{
      state.errorMessage = undefined
    }
  }
});

export const {onChecking, onLogin, onLogout, clearErrorMesage} = authSlice.actions

export default authSlice.reducer