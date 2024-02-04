import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link } from "react-router-dom"

import {useState , useEffect} from 'react';
import axios from "axios";

//   {
//       "S_No":"1",
//       "Staff_Name":"BATHINA VENKATESWARLU",
//       "Biometric_Id":"5101101",
//       "Society":"AA",
//       "Designation":"DRIVER",
//       "Mobile":"8946728190",
//       "Bus_Number":"6080",
//       "Route_Code":"KOLAMURU-KONTHAMURU",
//       "Aadharcard_No":"4839 8498 7487"
//   },
//   {
//     "S_No":"2",
//     "Staff_Name":"GANDHAM ADINARAYANA",
//     "Biometric_Id":"5101102",
//     "Society":"AA",
//     "Designation":"DRIVER",
//     "Mobile":"9010697423",
//     "Bus_Number":"7069",
//     "Route_Code":"DOWLESWARAM-1",
//     "Aadharcard_No":"6748 4677 8746"
// },
// {
//   "S_No":"3",
//   "Staff_Name":"NICHENAGUNTA SRINIVASA RAO",
//   "Biometric_Id":"5101104",
//   "Society":"SES",
//   "Designation":"DRIVER",
//   "Mobile":"9848384646",
//   "Bus_Number":"3987",
//   "Route_Code":"RTC COMPLEX-JAGRUTHI",
//   "Aadharcard_No":"5615 8746 2765"
// },
// {
//   "S_No":"4",
//   "Staff_Name":"POTLA RAHUL",
//   "Biometric_Id":"5101106",
//   "Society":"AA",
//   "Designation":"DRIVER",
//   "Mobile":"4877647636",
//   "Bus_Number":"9670",
//   "Route_Code":"MUGGUPETA-A V A ROAD",
//   "Aadharcard_No":"7637 6748 8746"
// },
// {
//   "S_No":"5",
//   "Staff_Name":"MOTURI LAKSHMANA RAO",
//   "Biometric_Id":"5101107",
//   "Society":"AA",
//   "Designation":"DRIVER",
//   "Mobile":"6642477337",
//   "Bus_Number":"7366",
//   "Route_Code":"SAI KRISHNA-CHURCH GATE",
//   "Aadharcard_No":"7653 7325 2786"
// },
// {
//   "S_No":"6",
//   "Staff_Name":"KOTHAPALLI CHITTIBABU (RTC)",
//   "Biometric_Id":"5101108",
//   "Society":"AA",
//   "Designation":"DRIVER",
//   "Mobile":"3876774788",
//   "Bus_Number":"1767",
//   "Route_Code":"MUGGALLA-THORREDU",
//   "Aadharcard_No":"7635 8763 7865"
// },
// {
//   "S_No":"7",
//   "Staff_Name":"RAYI VENKATA RAO",
//   "Biometric_Id":"5101109",
//   "Society":"AA",
//   "Designation":"DRIVER",
//   "Mobile":"8738723978",
//   "Bus_Number":"4931",
//   "Route_Code":"V.L.PURAM-J.N.ROAD-TILAKROAD",
//   "Aadharcard_No":"1725 3873 3777"
// },
// {
//   "S_No":"8",
//   "Staff_Name":"MOSUGANTI VARAPRASAD",
//   "Biometric_Id":"5101113",
//   "Society":"SES",
//   "Designation":"DRIVER",
//   "Mobile":"8378992873",
//   "Bus_Number":"7501",
//   "Route_Code":"GOKAVARAM BUSSTAND-SEETHAMPETA",
//   "Aadharcard_No":"8173 3738 3687"
// },
// {
//   "S_No":"9",
//   "Staff_Name":"BEHARA RAMU",
//   "Biometric_Id":"5101115",
//   "Society":"SES",
//   "Designation":"DRIVER",
//   "Mobile":"9282723772",
//   "Bus_Number":"4913",
//   "Route_Code":"KOVVURU",
//   "Aadharcard_No":"4728 3767 7786"
// },
// {
//   "S_No":"10",
//   "Staff_Name":"MULLA SOMARAJU",
//   "Biometric_Id":"5101116",
//   "Society":"SES",
//   "Designation":"DRIVER",
//   "Mobile":"8946728190",
//   "Bus_Number":"1387",
//   "Route_Code":"SEETHA NAGARAM",
//   "Aadharcard_No":"8763 2746 2478"
// }
// ];








const Driver=()=>{
 
  const [houses,sethouses]=useState([]);
  const [arr,setarr]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/getData')
    .then((res)=>{
      for(let i=0;i<res.data.length;i++){
        if(res.data[i].designation==='driver'){
          arr.push(res.data[i]);
        }
      }
      sethouses(arr);
    })
  })

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
      </div>
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
             
              <th>Staff Name</th>
              <th>Biometric Id</th>
             <th>Designation</th>
              <th>Mobile</th>
              <th>Bus Number</th>
              <th>Route Code</th>
              <th>Aadharcard No</th>
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
      <div className='footer'>
       <p>
        All Copyrights Reserved by @StackStars
      </p>
     </div>
     </div>
)

}
export default Driver;
