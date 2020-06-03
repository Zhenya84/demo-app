import React from 'react';
import Table from 'react-bootstrap/Table'
import { User } from './user';

export const Users = (props: any) => {
    const users = props.users;
    const rows = users.map((user, index) => (
        <User key={user.id} onDelete={props.onDeleteUser} orderNumber={index + 1} {...user} />
    ))

    return (
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
    );
  }