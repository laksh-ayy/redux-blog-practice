import { Dispatch } from "redux"
import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import jsonPlaceholder from "../../apis/jsonPlaceholder"

export const fetchPosts = (): ThunkAction<any, any, any, Action> => async (dispatch: Dispatch)=> {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: "FETCH_POSTS", payload: response.data })
}

export const fetchUser = (id: string): ThunkAction<any, any, any, Action>  => async (dispatch: Dispatch) => {
    const response = await jsonPlaceholder.get("/users/" + id)
    dispatch({type: "FETCH_USER", payload: response.data})
}