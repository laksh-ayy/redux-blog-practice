import { PostAction } from '../types/ActionType';

const fetchPostReducer = (state = [], action: PostAction) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload
        default:
            return state
    }
} 

export default fetchPostReducer