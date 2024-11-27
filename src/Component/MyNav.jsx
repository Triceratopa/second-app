import React from 'react'
import { Nav, Navbar, Container,NavDropdown } from 'react-bootstrap'
import '../Component/MyNav.css'

const MyNavbar=function(){
    return(
        <Navbar collapseOnSelect expand="lg" className='fixed'>
        <Container>
          <Navbar.Brand href="#home" className='text-white'>My Library</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className='text-white'>Home</Nav.Link>
              <Nav.Link href="#" className='text-white'> About</Nav.Link>
              <NavDropdown title="Type" id="collapsible-nav-dropdown"  >
                <NavDropdown.Item href="#" className=''>Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#" className='' >
                  History
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className=''>Horror</NavDropdown.Item>
                
                <NavDropdown.Item href="#" className=''>
                  SciFi
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default MyNavbar