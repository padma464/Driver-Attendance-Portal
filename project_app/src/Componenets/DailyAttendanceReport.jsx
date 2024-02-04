import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link } from "react-router-dom"


const data1=[
  {
    "sno":"1",
    "Bioid":"5101101",
    "societyname":"AA",
    "staffname":"BATHINA VENKAT",
    "designation":"DRIVER",
    "todaystatus":"P/A"
  },
  {
    "sno":"2",
    "Bioid":"5101102",
    "societyname":"AA",
    "staffname":"GANDHAM ADI",
    "designation":"DRIVER",
    "todaystatus":"P"
  },
  {
    "sno":"3",
    "Bioid":"9101101",
    "societyname":"AA",
    "staffname":"DEGALA SRINU",
    "designation":"CLEANER",
    "todaystatus":"P"
  },
  {
    "sno":"4",
    "Bioid":"5101104",
    "societyname":"SES",
    "staffname":"NICHENA SRINIVAS",
    "designation":"DRIVER",
    "todaystatus":"A"
  },
  {
    "sno":"5",
    "Bioid":"9101102",
    "societyname":"AA",
    "staffname":"CHAGANTI MURTHIRAJU",
    "designation":"CLEANER",
    "todaystatus":"P/A"
  },
  {
    "sno":"6",
    "Bioid":"5101106",
    "societyname":"SEC",
    "staffname":"POTLA RAHUL",
    "designation":"DRIVER",
    "todaystatus":"P/A"
  },
  {
    "sno":"7",
    "Bioid":"9101103",
    "societyname":"AA",
    "staffname":"KOTAMSETTI VENKATARAO",
    "designation":"CLEANER",
    "todaystatus":"P"
  },
  {
    "sno":"8",
    "Bioid":"5101107",
    "societyname":"AA",
    "staffname":"MOTURI LAKSHMAN",
    "designation":"DRIVER",
    "todaystatus":"P"
  },
  {
    "sno":"9",
    "Bioid":"9101104",
    "societyname":"SEC",
    "staffname":"VANAM DURGARAO",
    "designation":"CLEANER",
    "todaystatus":"P"
  },
  {
    "sno":"10",
    "Bioid":"9101104",
    "societyname":"SEC",
    "staffname":"GOLLA RAGHAVARAO",
    "designation":"CLEANER",
    "todaystatus":"A"
  }
];






const Daily=()=>{
    return(
      <div className="container-fluid">
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
        <div className="row">
             <div className="col-md-12" id="innerhead">
                <div >
                   <p>Drivers Attendance(Apr-2023-Report)Data</p>
                </div>
             </div>
          </div>
          <div className="row" id="buttons1">
            <div className="col-md-12" id="buttons">
              <ul>
              <li><button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button></li>
                <li><button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">CSV</span>
</button></li>
                <li><button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">EXCEL</span>
</button></li>
                <li><button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">PDF</span>
</button></li>
                <li><button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">PRINT</span>
</button></li>
              </ul>
            </div>
          </div>
        <div className="row">
          <div className="col-md-12">
          <table border={2} className="table table-bordered">
            <thead>
            <tr>
              <th>S.No</th>
              <th>Bio Id</th>
              <th>Society Name</th>
              <th>Staff Name</th>
              <th>Designation</th>
              <th>Today Status</th>
             </tr>
            </thead>

             {
              data1.map((val,key) => {
                return(
                   <tr key={key}>
                      <td>{val.sno}</td>
                      <td>{val.Bioid}</td>
                      <td>{val.societyname}</td>
                      <td>{val.staffname}</td>
                      <td>{val.designation}</td>
                      <td>{val.todaystatus}</td>
                      
                   </tr>
                )
              })
             }
         </table>
          </div>
        </div>
     </div>
     <div className='footer'>
       <p>
        All Copyrights Reserved by @StackStars
      </p>
     </div>
     </div>
)


}
export default Daily;
