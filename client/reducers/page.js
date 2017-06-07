import { ACTION_SET_TITLE } from '../constants/page';

const initialState = {
    title: 'Unknown title'
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case ACTION_SET_TITLE:
            return {...state, title: action.payload }
        default:
            return state;
    }
}
