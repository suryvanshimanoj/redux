import { createSlice } from "@reduxjs/toolkit";

export const Basic_slice = createSlice ({
    name:"Basic_slice",
    initialState: {
        name:" Tops Tech",
        number: 1,
        isImage:true 
    }, 

    reducers: {
        Change: (state)=>{
            return {...state, name: "Manoj Singh"}
        },
        Plus:(state)=>{
            return {...state,number:state.number+1}
        },
        Minus:(state)=>{
            return {...state,number:state.number-1}
        },
        Hide:(state)=>{
            return {...state,isImage:false}
        },
        Show:(state)=>{
            return {...state,isImage:true}
        },
        Toggle:(state)=>{
            return {...state,isImage:!state.isImage}
        }
    }
});

export const { Change, Plus, Minus, Hide, Show, Toggle } = Basic_slice.actions

export default Basic_slice.reducer