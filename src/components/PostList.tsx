import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions';
import { PostType } from '../store/types/PostType';
import { StateType } from '../store/types/StateType';
import UserHeader from './UserHeader';

interface IPostListProps {
    fetchPosts: Function
    posts: PostType[]
}

function PostList(props: IPostListProps) {

    useEffect(() => {
        props.fetchPosts()
    }, [props])

    const renderList = () => {
        return props.posts.map((post: PostType) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader id={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="ui relaxed divided list">
            {renderList()}
        </div>
    )
}

const mapStateToProps= (state: StateType) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList)
