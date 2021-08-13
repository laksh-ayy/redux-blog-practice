import { PostType } from './PostType';
import { UserType } from './UserType';
export interface StateType {
    posts: PostType[],
    users: UserType[]
}