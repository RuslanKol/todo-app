import {
    ADD_ITEM,
    GET_LIST,
} from '../constants/index';

const initialState = {
    list: []
}

export default function (state = initialState, {type,payload}) {
    switch(type) {
        case ADD_ITEM: return {list: payload};
        case GET_LIST: {
            if(payload === null) {
                return {list: []};
            } 
                return {list: payload};
        }
        default: return state;
    }
}