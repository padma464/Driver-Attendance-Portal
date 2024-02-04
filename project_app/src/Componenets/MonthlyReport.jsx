import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link } from "react-router-dom"
const data2 = [
  {
      "SNo":"01",
      "BioID":"9101101",
      "SocietyName":"AA",
      "StaffName":"DEGALA SRINU",
      "Apr01":"P",
      "Apr02":"PH",
      "Apr03":"P/A",
      "Apr04":"P",
      "Apr05":"P/A",
      "Apr06":"P",
      "Apr07":"P",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P/A",
      "Apr12":"P",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"02",
      "BioID":"9101102",
      "SocietyName":"AA",
      "StaffName":"CHANGATI MURTHIRAJU",
      "Apr01":"P",
      "Apr02":"PH",
      "Apr03":"P",
      "Apr04":"P/A",
      "Apr05":"P",
      "Apr06":"P",
      "Apr07":"P/A",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P",
      "Apr12":"P/A",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"03",
      "BioID":"9101103",
      "SocietyName":"AA",
      "StaffName":"KOTAMSETTI VENKATRAO",
      "Apr01":"P/A",
      "Apr02":"PH",
      "Apr03":"P",
      "Apr04":"P",
      "Apr05":"P",
      "Apr06":"P/A",
      "Apr07":"P",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P/A",
      "Apr12":"P",
      "Apr13":"AB",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"04",
      "BioID":"9101104",
      "SocietyName":"AA",
      "StaffName":"GHALLA RAGHAVARAO",
      "Apr01":"P",
      "Apr02":"PH",
      "Apr03":"P/A",
      "Apr04":"AB",
      "Apr05":"P",
      "Apr06":"P",
      "Apr07":"P/A",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P",
      "Apr12":"P",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"05",
      "BioID":"9101105",
      "SocietyName":"AA",
      "StaffName":"RYALI APPALACHARYULU",
      "Apr01":"P",
      "Apr02":"P",
      "Apr03":"AB",
      "Apr04":"P",
      "Apr05":"P",
      "Apr06":"P",
      "Apr07":"P/A",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P/A",
      "Apr12":"P",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"06",
      "BioID":"9101106",
      "SocietyName":"AA",
      "StaffName":"KORUKONDA APPARAO",
      "Apr01":"P",
      "Apr02":"P",
      "Apr03":"P/A",
      "Apr04":"P",
      "Apr05":"AB",
      "Apr06":"P",
      "Apr07":"P",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P/A",
      "Apr12":"P",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"07",
      "BioID":"9101107",
      "SocietyName":"AA",
      "StaffName":"NALLABHATI SUBHRAMANYAM",
      "Apr01":"P",
      "Apr02":"P",
      "Apr03":"P/A",
      "Apr04":"P",
      "Apr05":"P",
      "Apr06":"AB",
      "Apr07":"P",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P/A",
      "Apr12":"P",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"08",
      "BioID":"9101108",
      "SocietyName":"AA",
      "StaffName":"SOMALA SURYA NARAYANA",
      "Apr01":"P",
      "Apr02":"P",
      "Apr03":"AB",
      "Apr04":"P",
      "Apr05":"P",
      "Apr06":"P/A",
      "Apr07":"P",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P/A",
      "Apr12":"P",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"09",
      "BioID":"9101109",
      "SocietyName":"AA",
      "StaffName":"PENUMALLU LOVAREDDY",
      "Apr01":"P",
      "Apr02":"PH",
      "Apr03":"P",
      "Apr04":"P",
      "Apr05":"P/A",
      "Apr06":"P",
      "Apr07":"P",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P",
      "Apr12":"AB",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },
    {
      "SNo":"10",
      "BioID":"9101110",
      "SocietyName":"AA",
      "StaffName":"CHOPPA KASULU",
      "Apr01":"P",
      "Apr02":"PH",
      "Apr03":"P",
      "Apr04":"P",
      "Apr05":"P",
      "Apr06":"AB",
      "Apr07":"P",
      "Apr08":"P",
      "Apr09":"PH",
      "Apr10":"P",
      "Apr11":"P",
      "Apr12":"P/A",
      "Apr13":"P",
      "Apr14":"-",
      "Apr15":"-",
      "Apr16":"-",
      "Apr17":"-",
      "Apr18":"-",
      "Apr19":"-",
      "Apr20":"-",
      "Apr21":"-",
      "Apr22":"-",
      "Apr23":"-",
      "Apr24":"-",
      "Apr25":"-",
      "Apr26":"-",
      "Apr27":"-",
      "Apr28":"-",
      "Apr29":"-",
      "Apr30":"-",
    },]

function Month(){
  return(
      <div >
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
      <div className="container-fluid">
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
             <thead id="tbr"><tr>
              <th>S.No</th>
                   <th>Bio ID</th>
                   <th>Society Name</th>
                   <th>Staff Name</th>
                   <th>Apr 01</th>
                   <th>Apr 02</th>
                   <th>Apr 03</th>
                   <th>Apr 04</th>
                   <th>Apr 05</th>
                   <th>Apr 06</th>
                   <th>Apr 07</th>
                   <th>Apr 08</th>
                   <th>Apr 09</th>
                   <th>Apr 10</th>
                   <th>Apr 11</th>                
                   <th>Apr 12</th>
                   <th>Apr 13</th>
                   <th>Apr 14</th>
                   <th>Apr 15</th>
                   <th>Apr 16</th>
                   <th>Apr 17</th>
                   <th>Apr 18</th>
                   <th>Apr 19</th>
                   <th>Apr 20</th>
                   <th>Apr 21</th>
                   <th>Apr 22</th>
                   <th>Apr 23</th>
                   <th>Apr 24</th>
                   <th>Apr 25</th>
                   <th>Apr 26</th>
                   <th>Apr 27</th>
                   <th>Apr 28</th>
                  <th>Apr 29</th>
                   <th>Apr 30</th>
              </tr></thead> 
              {data2.map((val,key) => {
                  return(
                      <tr key={key} >
                         <td>{val.SNo}</td>
                          <td>{val.BioID}</td>
                          <td>{val.SocietyName}</td>
                          <td>{val.StaffName}</td>
                          <td>{val.Apr01}</td>
                          <td>{val.Apr02}</td>
                          <td>{val.Apr03}</td>
                          <td>{val.Apr04}</td>
                          <td>{val.Apr05}</td>
                          <td>{val.Apr06}</td>
                          <td>{val.Apr07}</td>
                          <td>{val.Apr08}</td>
                          <td>{val.Apr09}</td>
                          <td>{val.Apr10}</td>
                          <td>{val.Apr11}</td>
                          <td>{val.Apr12}</td>
                          <td>{val.Apr13}</td>
                          <td>{val.Apr14}</td>
                          <td>{val.Apr15}</td>
                          <td>{val.Apr16}</td>
                          <td>{val.Apr17}</td>
                          <td>{val.Apr18}</td>
                          <td>{val.Apr19}</td>
                          <td>{val.Apr20}</td>
                          <td>{val.Apr21}</td>
                          <td>{val.Apr22}</td>
                          <td>{val.Apr23}</td>
                          <td>{val.Apr24}</td>
                          <td>{val.Apr25}</td>
                          <td>{val.Apr26}</td>
                          <td>{val.Apr27}</td>
                          <td>{val.Apr28}</td>
                          <td>{val.Apr29}</td>
                          <td>{val.Apr30}</td>
                      </tr>
                  )
              })}
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
  );
}



export default Month
