import React from 'react';
import { Users } from './users';

export const UsersContainer = () => {
    const [ users, setUsers ] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3003/users', {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }) // ?take=100;skip=100
            .then(response => {
                return response.json();
            })
            .then(
                newUsers => {
                    setUsers(newUsers);
                },
                error => {
                    console.error(error);
                }
            );
    }, []);

    console.log(users.length);
    const onDeleteUser = React.useCallback((userId) => {
        fetch('http://localhost:3003/users/' + userId, {
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(
                () => {
                    console.log(users.length);
                    const newUsers = users.filter((user: any) => {
                        return user.id !== Number(userId)
                    });
                    setUsers(newUsers); 
                },
                error => {
                    alert('User was not deleted!')
                }
            );
    }, [users])

    return (
        <Users users={users} onDeleteUser={onDeleteUser} />
    )
}