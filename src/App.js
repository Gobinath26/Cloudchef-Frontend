 import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Sb.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Cart from './Cart';
import Addrecipe from './Addrecipe';
import Addtomenu from './Addtomenu';
import Dashboard from './Dashboard';
import Additem from './Additem';
import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import Edit from './Edit';
import Ytorder from './Ytorder';
import Payment from './Payment';
import Itemtotal from './Itemtotal';
import Orderpayment from './Orderpayment';
import Bookingconfirmed from './Bookingconfirmed';
import Accept from './Accept';
import Customorderstatus from './Customorderstatus';
import CustuomPayment from './CustomPayment';
import Customorderpayment from './CustomorderPayment';
import Mycustomorder from './Mycustomorder';
 
 
function App() {
  const [useremail,setuseremail]=useState(null)
  const[bill,setbill]= useState(null)
  const[custombill,setcustombill]= useState(null)

   return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar useremail={useremail}/>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar  useremail={useremail} setuseremail={setuseremail}/>
              <div class="container-fluid">
                <Routes>
                <Route path="/login" element={<Login setuseremail={setuseremail}/>}></Route>
                <Route path="/" element={<Register/>}></Route>
 <Route path="/addrecipe" element={<Addrecipe useremail={useremail} />}></Route>
 <Route path="/addtomenu" element={<Addtomenu />}></Route>
 <Route path="/dashboard" element={<Dashboard useremail={useremail}/>}></Route>
 <Route path="/cart" element={<Cart useremail={useremail} setbill={setbill} />}></Route>
 <Route path="/additem/:id" element={<Additem useremail={useremail} />}></Route>
 <Route path="/editcart/:id" element={<Edit useremail={useremail} />}></Route>
 <Route path="/ytorder" element={<Ytorder/>}></Route>
 <Route path="/mycustomorder" element={<Mycustomorder useremail={useremail}/>}></Route>

 <Route path="/payment/:id" element={<Payment bill={bill}/>}></Route>
 <Route path="/orderpayment/:id" element={<Orderpayment/>}></Route>
 <Route path="/customorderpayment/:id" element={<Customorderpayment custombill={custombill}/>}></Route>

 <Route path="/bookingconfirmedlist" element={<Bookingconfirmed useremail={useremail}/>}></Route>
 <Route path="/accept/:id" element={<Accept useremail={useremail}/>}></Route>
 <Route path="/customstatus/" 
 element={<Customorderstatus useremail={useremail} setcustombill={setcustombill}/>}></Route>
 <Route path="/custuompayment/:id" element={<CustuomPayment 
 useremail={useremail} custombill={custombill}/>}></Route>

    </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </div>

  );
}

export default App;
