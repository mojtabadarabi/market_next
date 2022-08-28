import { SET_LANG } from '../actionTypes'

export const setEnLang=()=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang:'en',dir:'ltr'}})
}
export const setFaEnLang=()=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang:'fa',dir:'rtl'}})
}
export const setArLang=()=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang:'ar',dir:'rtl'}})
}
export const setTrLang=()=>(dispatch)=>{
    dispatch({type:SET_LANG,payload:{lang:'tr',dir:'ltr'}})
}