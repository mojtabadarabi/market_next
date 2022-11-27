import {SET_LANG, SET_MENU_SHOW_STATUS_} from '../actionTypes'
import React from "react";

export const setEnLang=()=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang:'en',dir:'ltr'}})
}
export const setFaLang=()=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang:'fa',dir:'rtl'}})
}
export const setLang=(lang:String,dir:string)=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang,dir}})
}
export const setArLang=()=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang:'ar',dir:'rtl'}})
}
export const setTrLang=()=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang:'tr',dir:'ltr'}})
}
export const toggleMenu=(value:boolean)=>(dispatch:React.Dispatch<any>)=>{
    dispatch({type:SET_MENU_SHOW_STATUS_,payload:value})
}
