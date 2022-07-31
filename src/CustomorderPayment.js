import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Customorderpayment() {
    var navigate = useNavigate();
    const[list,setlist] = useState([]);
    var params = useParams();
    useEffect(async () => {
        confirmorder()
      }, [])
    
       

      let confirmorder = async () => {
        try {
          let itemdetials = await axios.put(`https://cloud-chef.herokuapp.com/custompayorder/${params.id}`);
            navigate('/mycustomorder')
           
        } catch (error) {
          console.log(error)
        }
      }

    
  return (
    <div>Loading...</div>
  )
}
 
export default Customorderpayment
