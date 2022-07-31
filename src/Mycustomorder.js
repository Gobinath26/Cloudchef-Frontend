import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
 import './style.css';
import { useState } from 'react';

function Mycustomorder({useremail}) {
    const [list,setlist] = useState([])
    useEffect(async () => {
        fetchcar()
      }, [])
    
      let fetchcar = async () => {
        try {
          let itemdetials = await axios.get(`https://cloud-chef.herokuapp.com/mycustomorder/${useremail}`,{
            headers: {
                Authorization: window.localStorage.getItem("my_token")
            }
        });
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
  return (
    <>
    <div className='container' id='ordercardcontainer'>
    {
        list.map((obj, index) => {
            
            return <div key={index}>
               
                <div class="card mt-4 ml-4" id='ordercard' style={{ width: "252px" }}>
                <button className='btn'  onClick={() => handleDelete(obj._id)} 
                     id='xbtn'> <b id='xtxt'>X</b></button>
                 <div class="card-body" id='odrcardbd'>
                     <button className='btn btn-light'><a href={obj.url}>View Video</a> </button>
 <p class="card-text" id='ordtxt'>{` Status - ${obj.status}`}</p>
 <p class="card-text" id='ordtxt'> {`Price - rs.${obj.orderprice}`}
</p>

                   
                     
                       
                     </div>
                     </div>
            </div>
        })
    }
    </div>
 </>
  )
}

export default Mycustomorder
