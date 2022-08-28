import { SET_LANG } from "../actionTypes";
import { initialState } from "../initialState";
import {stateType} from '../store'

const langReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_LANG:
            return {...state,lang:action.payload.lang,dir:action.payload.dir}
        default:
            return state;
    }
}

export default langReducer;