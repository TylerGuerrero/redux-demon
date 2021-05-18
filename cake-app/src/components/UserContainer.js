import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/actions/userActions'

const UserContainer = ({ userData, fetchUsers }) => {

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div>
            <h1>Users</h1>
            {userData.loading && <h1> Is Loading ... </h1>}
            {userData.error && <p>{ userData.error }</p>}
            {userData.users && 
                <ul>
                    {userData.users.map((user) => {
                        return (
                            <li key={user.id}>
                                <p> { user.name } </p>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(UserContainer)
