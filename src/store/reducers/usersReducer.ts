import { PostAction } from "../types/ActionType";

const fetchUserReducer = (state= [], action: PostAction) => {
    switch(action.type) {
        case 'FETCH_USER':
            return [...state, action.payload]
        default:
            return state
    }
}

export default fetchUserReducer