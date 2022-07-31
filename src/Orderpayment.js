import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Orderpayment() {
    var navigate = useNavigate();
    const[list,setlist] = useState([]);
    var params = useParams();
    useEffect(async () => {
        confirmorder()
      }, [])
    
       

      let confirmorder = async () => {
        try {
          let itemdetials = await axios.put(`https://cloud-chef.herokuapp.com/payorder/${params.id}`,{
            headers: {
                Authorization: window.localStorage.getItem("my_token")
            }
        });
        //    alert("Booking Confirmed");
           navigate('/bookingconfirmedlist')
           
        } catch (error) {
          console.log(error)
        }
      }

    
  return (
    <div>Loading...</div>
  )
}
 
export default Orderpayment
