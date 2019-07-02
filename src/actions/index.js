import {
    ADD_ITEM,
    GET_LIST
} from '../constants/index';
import axios from 'axios';

export function addListItem(data) {
    return(dispatch) => {
        localStorage.setItem('todoList', JSON.stringify(data));

        dispatch({
            type: ADD_ITEM,
            payload: data //if api works, change var to res
        })

        //POST METHOD
        axios.post(`${axios.defaults.baseURL}/api/list`, { data })
            .then(res => {
                console.log(res);

                dispatch({
                    type: ADD_ITEM,
                    payload: data //if api works, change var to res
                })
        })
        dispatch(getList());
    }
}

export function getList() {
    return(dispatch) => {
        let list = localStorage.getItem('todoList');
        list = JSON.parse(list);

        dispatch({
            type: GET_LIST,
            payload: list
        })

        //GET METHOD
        axios.get(`${axios.defaults.baseURL}/api/list`)
            .then(res => {
                const list = res.data;
                dispatch({
                    type: GET_LIST,
                    payload: list
                })
            })
            .catch((err) => {
                console.log(err);
            }) 
    }
} 