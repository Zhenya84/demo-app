import React from 'react';
import { CreateUser } from './create';

export const UserCreateContainer = () => {
    const onCreate = React.useCallback((newUser) => {
        fetch('http://localhost:3003/users', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => {
            return response.json();
        })
        .then(
            users => {
                // setUsers(users);
            },
            error => {
                console.error(error);
            }
        );
    }, []);

    return (
        <CreateUser onCreate={onCreate} />
    )
}