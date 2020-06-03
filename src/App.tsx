import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { UsersContainer } from './pages/users/container';
import { UserCreateContainer } from './pages/user/container';

function App() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Demo app</Navbar.Brand>
      </Navbar>

      <UserCreateContainer />
      <UsersContainer />

    </Container>
  );
}

export default App;

