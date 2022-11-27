import {SET_LANG, SET_MENU_SHOW_STATUS_} from "../actionTypes";
import { initialState } from "../initialState";
import {stateType} from '../store'
import i18next from "i18next";

const langReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_LANG:

            return {...state,lang:action.payload.lang,dir:action.payload.dir}
        case SET_MENU_SHOW_STATUS_:
            return  {...state,isMenuOpen:action.payload}
        default:
            return state;
    }
}

export default langReducer;