import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link } from "react-router-dom"
import {useState,useEffect} from 'react';
import axios from "axios";


// const data = [
//   {
//           "SNo":"1",
//           "StaffName":"DEGALA SRINU",
//           "BiometricId":"9101101",
//           "Society":"AA",
//           "Designation":"CLEANER",
//           "Mobile":"9930987764",
//           "BusNumber":"7069",
//           "RouteCode":"DOWLESWARAM-1",
//           "AadharcardNo":"5436 1234 7487"
//    },
//    {
//       "SNo":"2",
//       "StaffName":"CHAGANTI MURTHIRAJU",
//       "BiometricId":"9101102",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"4958",
//       "RouteCode":"SAMPARA",
//       "AadharcardNo":"1234 5674 7347"
//     },
//     {
//       "SNo":"3",
//       "StaffName":"KOTAMSETTI VENKATARAO",
//       "BiometricId":"9101103",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"5674",
//       "RouteCode":"DOWLESWARAM",
//       "AadharcardNo":"4321 1234 7487"
//     },
//     {
//       "SNo":"4",
//       "StaffName":"VANAM DURGARAO",
//       "BiometricId":"9101104",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"7757",
//       "RouteCode":"KOVVURU",
//       "AadharcardNo":"5436 6789 7487"
//     },
//     {
//       "SNo":"5",
//       "StaffName":"GOLLA RAGHAVARAO",
//       "BiometricId":"9101104",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"7757",
//       "RouteCode":"KOVVURU",
//       "AadharcardNo":"5436 6789 7487"
//     },
//     {
//       "SNo":"6",
//       "StaffName":"POTLA HARIPRASAD",
//       "BiometricId":"9101105",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"7678",
//       "RouteCode":"RAJMUNDRY",
//       "AadharcardNo":"6754 3267 7878"
//     },
//     {
//       "SNo":"7",
//       "StaffName":"CHOPPA KASULU",
//       "BiometricId":"9101106",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"7365",
//       "RouteCode":"KADIYAM",
//       "AadharcardNo":"7896 3452 9898"
//     },
//     {
//       "SNo":"8",
//       "StaffName":"PENUMALLU LOVAREDDY",
//       "BiometricId":"9101107",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"7845",
//       "RouteCode":"G MAMINADA",
//       "AadharcardNo":"8765 4321 9654"
//     },
//     {
//       "SNo":"9",
//       "StaffName":"SOMALA SURYA NARAYANA",
//       "BiometricId":"9101108",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"7366",
//       "RouteCode":"BOMMURU",
//       "AadharcardNo":"1232 8745 8756"
//     },
//     {
//       "SNo":"10",
//       "StaffName":"KORUKUNDA APPARAO",
//       "BiometricId" :"9101107",
//       "Society":"AA",
//       "Designation":"CLEANER",
//       "Mobile":"NO",
//       "BusNumber":"7366",
//       "RouteCode":"MUGGUPETA",
//       "AadharcardNo":"8768 2876 8765"
//     },
// ]


const Cleaner=()=>{
  const [houses,sethouses]=useState([]);
  const [arr,setarr]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/getData')
    .then((res)=>{
      for(let i=0;i<res.data.length;i++){
        if(res.data[i].designation==='cleaner'){
          arr.push(res.data[i]);
        }
      }
      sethouses(arr);
    })
})
    return(
      <div class="container-fluid">
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
                <li><button>Copy</button></li>
                <li><button>Csv</button></li>
                <li><button>Excel</button></li>
                <li><button>PDF</button></li>
                <li><button>Print</button></li>
              </ul>
            </div>

          </div>
            <div className="row">
            <div className="col-md-12">
            <table  className="table table-bordered">
            <thead >
                <tr>
                    
                    <th>Staff Name</th>
                    <th>Biometric Id</th>
                    <th>Designation</th>
                    <th>Mobile</th>
                    <th>Bus Number</th>
                    <th>Route Code</th>
                    <th>Aadharcard NO</th>
                </tr>
                </thead>
                {
              houses.map((val,key) => {
                return(
                   <tr key={key}>
                    
                      <td>{val.fullname}</td>
                      <td>{val.biometricid}</td>
                      <td>{val.designation}</td>
                      <td>{val.mobilenumber}</td>
                      <td>{val.busnumber}</td>
                      <td>{val.routecode}</td>
                      <td>{val.adharnumber}</td>
                     
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
export default Cleaner;
