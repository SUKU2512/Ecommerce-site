import {createSlice} from '@reduxjs/toolkit'

const initialstate={
    answer:0,
}
const slice = createSlice({
    initialState:initialstate,
    reducers :{
        addition:(state,action)=>{
            state.answer+=action.payload.num1+action.payload.num2;
        },
        subtraction:(state,action)=>{
            state.answer+=action.payload.num1+action.payload.num2;
        },
        multiplication:(state,action)=>{
            state.answer+=action.payload.num1+action.payload.num2;
        },
        division:(state,action)=>{
            state.answer+=action.payload.num1+action.payload.num2;
        }
    }
})
export const{
    addition,
    subtraction,
    multiplication,
    division
}= slice.actions
export const calculateReducer= slice.reducer;