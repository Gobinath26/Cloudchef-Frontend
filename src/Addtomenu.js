import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import './style.css'

function Addtomenu() {
    const formik = useFormik({
        initialValues: {
            url:'',
            price:'',
            description:''
        },
        onSubmit: async (values) => {
          try {
            console.log(values);
            let data = await axios.post("https://cloud-chef.herokuapp.com/menu", values)
             
    
          } catch (error) {
            console.log(error)
          }
        }
        
      })
  return (
      <>
       <form onSubmit={formik.handleSubmit}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Image URL:</b></label></div>
            <div className='col-lg-4'><input type="url" className='form-control'  
              onChange={formik.handleChange} value={formik.values.url} name='url'></input></div>
          </div>

          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Price:</b></label></div>
            <div className='col-lg-4'><input type="number" className='form-control'  
              onChange={formik.handleChange} value={formik.values.price} name='price'></input></div>
          </div>

          <div className='row mt-4'>
            <div className='col-lg-4 text-right '><label><b>Recipe Name:</b></label></div>
            <div className='col-lg-4'><input type="textbox"   className='form-control'  
              onChange={formik.handleChange} value={formik.values.description} name='description'></input></div>
          </div>
          
          <div className='row mt-2'>
          
          <div className='col-lg-12 mt-3 text-center'><input type="submit" 
           className='btn' id='addbtn' value="Add to Menu"></input></div>
        </div>
        </div>
      </form>
      </>
    
  )
}

export default Addtomenu
