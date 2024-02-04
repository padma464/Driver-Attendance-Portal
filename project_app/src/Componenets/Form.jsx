import React ,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link } from "react-router-dom"


const Form1=()=>{

    const [send,setSend] = useState({

      
        fullname:"",
        biometricid:"",
        designation:"",
        mobilenumber:"",
        busnumber:"",
        routecode:"",
        adharnumber:""

    })

    const handleChange = (e) => {
        setSend((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const postSubmit = (e) =>{
       e.preventDefault()
       axios.post('http://localhost:5000/postdata',{send})
       console.log(send)
      
       alert('Success')
    }
    return(
      <div>
         <div>
      {['xxl' ].map((expand) => (
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
                  Welcome
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
      <div><p id="form2"><b>USER ENTRY DETAILS</b></p></div>
          <div className="container-fluid" id="form1" >
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <form>
              <div >
                 <label for="Name" >Full Name:</label>
                 <input type="text" className="form-control" name="fullname" onChange={handleChange} placeholder="Enter full name"/>
              </div>
              
              <div className="form-group">
                 <label >Biometric ID:</label>
                 <input type="text" className="form-control" name="biometricid" onChange={handleChange} placeholder="Enter biometric id"/>
              </div>
              

              <div className="form-group">
                 <label >Designation:</label>
                 <input type="text" className="form-control"  name="designation" onChange={handleChange} placeholder="Enter your designation"/>
              </div>
              <div className="form-group">
                 <label >Mobile Number:</label>
                 <input type="text" className="form-control"  name="mobilenumber" onChange={handleChange} placeholder="Enter your mobile number"/>
              </div>
              <div className="form-group">
                 <label >Bus Number:</label>
                 <input type="text" className="form-control"   name="busnumber" onChange={handleChange} placeholder="Enter your bus number"/>
              </div>
              <div className="form-group">
                 <label >Route Code:</label>
                 <input type="text" className="form-control"  name="routecode" onChange={handleChange} placeholder="Enter route code"/>
              </div>
              <div className="form-group">
                 <label >Aadhar Number:</label>
                 <br/>
                 <input type="text" className="form-control" name="adharnumber" onChange={handleChange} placeholder="Enter your aadhar"/>
              </div>
             <br></br>
                   <button type="submit" onClick={postSubmit} id="clear" className="btn btn-primary">Submit</button>
                   <button type="reset"  className="btn btn-warning" id="clear">Reset</button>
            </form>        
         </div>
         <div className="col-md-3"></div>
         </div></div>
      <div className='footer'>
       <p>
        All Copyrights Reserved by @StackStars
      </p>
     </div>
        <div  className="ddd">
         
        </div>
        </div>
    )
}
export default Form1;
