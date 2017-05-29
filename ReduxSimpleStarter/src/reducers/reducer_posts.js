import {FETCH_POST, FETCH_SINGLE_POST} from '../components/actions/index.js';

const INITIAL_STATE = {
                        all:[],
                        post:null
                    };

export default function(state = INITIAL_STATE, action){
    
    switch(action.type){
        case FETCH_SINGLE_POST: return {...state, post:action.payload.data}
        case FETCH_POST: return {...state, all:action.payload.data}

        default: return state;
    }
}