import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Ytorder() {
    const [ytborder, setytborder] = useState([]);
    useEffect(async () => {
        fetchcart()
      }, [])
    
      let fetchcart = async () => {
        try {
          let itemdetials = await axios.get(`https://cloud-chef.herokuapp.com/ytorder`);
          console.log(itemdetials.data);
          setytborder(itemdetials.data)
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <>
    <div style={{ width: 'auto' }}>Custom Orders List</div>
    
    <div className='container' id='cardcontainer'>
      {
ytborder.map((obj, key) => {
 
          return <div>
            <div class="card mt-4 ml-4" id='custordcard' style={{ width: "252px" }}>
              <p class="card-text mt-1"><button className='btn btn-light'><a href={obj.url}  target="_blank">
                   View Video</a>
                 </button></p>
                <div class="card-body" id='custordcard'>
                <p class="card-text">{` ${obj.description}`}</p>
              <Link to={`/accept/${obj._id}`}><button className='btn btn-light'  >Accept Order</button></Link> 
              </div>
            </div>
          </div>
        })
      }

    </div>
  </>

  )
}

export default Ytorder
