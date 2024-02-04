import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link } from "react-router-dom"

function OffcanvasExample() {
  return (
    <>
    <div>
      {['lg' ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" >
          <Container fluid id="portal1">
            <Navbar.Brand href="#"><p id="portal">Driver Attendance Portal</p></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h3>Welcome</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  {/* <Nav.Link href="#action1"><Link to="login"  className='menu'>Login</Link></Nav.Link> */}
                  
                  <NavDropdown
                    title="Click here"
                    id={`offcanvasNavbarDropdown-expand-${expand}` }
                  >
                    <NavDropdown.Item href="#action3" ><Link to="/dash" className='menu'>Dashboard</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action3"><Link to="/drinfo" className='menu'>Driver's info</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action3"><Link to="/crinfo" className='menu'>cleaner's info</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action3"><Link to="dcmr" className='menu' >Driver's Current Monthly Report</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action3"><Link to='/ccmr' className='menu'>Cleaner's Current Monthly Report</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action3"><Link to="/dar" className='menu'>Daily Attendance Report</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action3"><Link to="/mr" className='menu'>Monthly Report</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action3"><Link to="/form" className='menu'>Form</Link></NavDropdown.Item>
                    
                  </NavDropdown>
                  <Nav.Link href="#action1"><Link to="/" className='menu'>Log Out</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
      <div className='footer'>
       <p>
        All Copyrights Reserved by @StackStars
      </p>
     </div>
    </>
  );
}

export default OffcanvasExample;
