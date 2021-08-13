import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../store/actions'
import { StateType } from '../store/types/StateType';
import { UserType } from '../store/types/UserType';

interface IUserHeaderProps {
    user: UserType | undefined
    fetchUser: Function
}

interface IUserId {
    id: string
}

function UserHeader(props: IUserHeaderProps & IUserId) {
    
    useEffect(() => {
        props.fetchUser(props.id)
    }, [props])

    const user = props.user
    return (
        <div className="header">
            {user && user.name}
        </div>
    )
}

const mapStateToProps = (state: StateType, ownProps: IUserId) => {
    return {user: state.users.find((user) => (user.id === ownProps.id))}
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)
