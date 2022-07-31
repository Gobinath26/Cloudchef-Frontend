import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Customorderstatus({useremail,setcustombill}) {
  var navigate = useNavigate();
    const[list,setlist]= useState([]);
    useEffect(async () => {
        fetchcar()
      }, [])
    
      let fetchcar = async () => {
        try {
          let itemdetials = await axios.get(`https://cloud-chef.herokuapp.com/ytorderstatus/${useremail}`,{
            headers: {
                Authorization: window.localStorage.getItem("my_token")
            }
        });
        if((itemdetials.data.length==0)){
          alert('In this project the chef need to accept the order and specify the custom order price...');
          navigate('/ytorder')
        }
          console.log(itemdetials.data)
           setlist(itemdetials.data)
        } catch (error) {
          console.log(error)
        }
      }

      let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure do you want to cancel?")
            if (result) {
                await axios.delete(`https://cloud-chef.herokuapp.com/customcart/${id}` )
                fetchcar()
            }
        } catch (error) {
            console.log(error)
        }
    }


      let calculate = async (id) => {
        try {
            var orderinfo = await axios.get(`https://cloud-chef.herokuapp.com/ytorder/${id}`,{
              headers: {
                  Authorization: window.localStorage.getItem("my_token")
              },
      })
      
      console.log(orderinfo.data[0].orderprice)
      setcustombill(orderinfo.data[0].orderprice)      
      
      
        } catch (error) {
            console.log(error)
        }
      }

  return (
    <>
     
    <div className='container' id='cardcontainer'>
      {
list.map((obj, key) => {
 
          return <div>
            <div class="card mt-5 ml-4" id='orderstatuscrd' style={{ width: "252px" }}>
              
                <div class="card-body" id='cardbody'>
                <p class="card-text">{`Order Status - ${obj.status}`}</p>
                <p class="card-text">{`Order Price - ${obj.orderprice}`}</p>
                <p class="card-text">Pay Now To Confirm Your Order</p>
                <Link to={`/custuompayment/${obj._id}`}> 
                                  <button className='btn btn-sm btn-light mr-2 '
                                       onClick={() => calculate(obj._id)}
                                    >Pay Now</button></Link> 
                                     <button className='btn btn-sm btn-light ml-2'  onClick={() => handleDelete(obj._id)} 
                      > <b>cancel</b></button>
              </div>
            </div>
          </div>
        })
      }

    </div>
  </>
  )
}

export default Customorderstatus
