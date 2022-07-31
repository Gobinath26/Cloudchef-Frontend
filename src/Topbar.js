import react, { useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';
import {  useNavigate } from "react-router-dom";


export default function Topbar({ useremail ,setuseremail}) {
    var navigate = useNavigate();
    useEffect(async () => {
      setuseremail(window.localStorage.getItem("useremail"))
    }, [])

    let handleLogout = async (id) => {
        try {
            let result = window.confirm("Are you sure do you want to Logout?")
            if (result) {
                 
              setuseremail(null);
              window.localStorage.setItem("my_token", null);
              window.localStorage.setItem("useremail", null);
              navigate('/login')
    
            }
        } catch (error) {
            console.log(error)
        }
    }
       

    return (
        <div id="tpbar">
            <span id="logregbtn">
                <Link to="/dashboard">
                    <button className="btn btn-sm " id='loginbtn' >Menu</button>
                </Link>


                <Link  to='/cart'>
                <button className="btn btn-sm" id='loginbtn' >Cart</button>
                    </Link>

                <Link to='/bookingconfirmedlist'  >
                    <button className="btn btn-sm" id='loginbtn' >My Orders</button>
                </Link>

                { useremail!==null?<Link to='/login' id='linklogbtn'>  
                <button className="btn btn-sm textdoction-none" id='loginbtn'>
                    Login</button></Link>:<Link to='/login'>  <button className="btn btn-sm "
         id='blink_me'>Login</button></Link> }

                <Link to='/'><button className="btn btn-sm " id='loginbtn' >Register</button></Link>

                <button className="btn btn-sm " id='loginbtn'
             onClick={() => handleLogout()}>Logout</button>  
            </span>

        </div>
    )
}
