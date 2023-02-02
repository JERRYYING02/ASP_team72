import axios from 'axios';
import React,{useContext} from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import { LinkContainer} from 'react-router-bootstrap';
import { MyContext } from '../../context';
import {useHistory} from 'react-router-dom';


function AppNavbar() {
  
  const {user,setUser} = useContext(MyContext);
  const history = useHistory();
  const handleLogout = () =>
  { 

    //have axios bug so i use fetch instead
    fetch("http://localhost:5000/logout").then(()=>{
      localStorage.removeItem("token");
      setUser(null);
    });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!user && (
            <Nav className="me-auto">
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>{" "}
              <LinkContainer to="/signup">
                <Nav.Link>Sign up</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
          {user && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar