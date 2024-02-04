
import './App.css';
// import Nav from './Componenets/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dash from './Componenets/Dashboard';
import Month from './Componenets/MonthlyReport';
import Driver from './Componenets/DriversInfo';
import Cleaner from './Componenets/CleanersInfo';
import Drivers from './Componenets/DriversCurrentMonthReport';
import Cleaners from './Componenets/CleanersCurrentMonthReport';
import Daily from './Componenets/DailyAttendanceReport';
import 'bootstrap/dist/css/bootstrap.css';
import Form1 from './Componenets/Form';
import Login from './Componenets/Login';

 function App() {
//   let path = window.location.href;
//   console.log(path)
//   let arr = path.split('/');
//   console.log(arr)
//   let path_name = arr[2];
  return (
    <div>
    <BrowserRouter>
    {/* <Login/> */}
    {/* { path_name != '' ? (<Nav/>) : '' }   */}
    {/* if (path_name='') {  <Login />  }  else{ <Nav />}  */}
    
    <Routes>
    <Route path ="/"  element ={<Login/>}/>
    <Route path ="/dash"  element ={<Dash/>}/>
    <Route path ="/drinfo"  element ={<Driver/>}/>
    <Route path ="/crinfo"  element ={<Cleaner/>}/>
    <Route path ="/dar"  element ={<Daily/>}/>
    <Route path ="/dcmr"  element ={<Drivers/>}/>
    <Route path ="/ccmr"  element ={<Cleaners/>}/>
    <Route path ="/mr"  element ={<Month/>}/>
    <Route path ="/form"  element ={<Form1/>}/>
    </Routes> 
    </BrowserRouter>
    
    </div>
  );
}

export default App;
