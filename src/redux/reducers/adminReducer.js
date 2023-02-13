import { createReducer } from "@reduxjs/toolkit";

export const adminReducer=createReducer({},{
    getAllUserRequest:state=>{
        state.loading=true
    },
    getAllUserSuccess:(state, action)=>{
        state.loading=false;
        state.users=action.payload
    },
    getAllUserFail:(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    deleteUserRequest:state=>{
        state.loading=true
    },
    deleteUserSuccess:(state, action)=>{
        state.loading=false;
        state.message=action.payload
    },
    deleteUserFail:(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    updateUserRequest:state=>{
        state.loading=true
    },
    updateUserSuccess:(state, action)=>{
        state.loading=false;
        state.message=action.payload
    },
    updateUserFail:(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    addLectureRequest:state=>{
        state.loading=true
    },
    addLectureSuccess:(state, action)=>{
        state.loading=false;
        state.message=action.payload
    },
    addLectureFail:(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    deleteLectureRequest:state=>{
        state.loading=true
    },
    deleteLectureSuccess:(state, action)=>{
        state.loading=false;
        state.message=action.payload
    },
    deleteLectureFail:(state, action)=>{
        state.loading=false;
        state.error=action.payload
    },
    clearError:(state)=>{
        state.error=null
    },
      clearMessage:(state)=>{
        state.message=null
    },
})