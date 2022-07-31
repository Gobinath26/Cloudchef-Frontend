import React from 'react';
import axios from 'axios';
import {formik, useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Login';

function Addrecipe({useremail}) {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email:useremail,
       url:'',
       description:'',
       status:'not taken',
       orderprice:''
    },
    onSubmit: async (values) => {
      try {

        if(useremail!== null){
          console.log(values);
          let data = await axios.post("https://cloud-chef.herokuapp.com/ytorder", values)
          alert( 'Your order placed successfully');
          navigate('/dashboard')
        }else{
          alert("Login to place order");
          navigate('/login')
        }
       
        } catch (error) {
        console.log(error)
      }
    }
    
  })
  return (
    <>
    <h5 className='mt-3'>Hello welcome to custom order section here you can paste you required recipe video link.
      Our chefs will cook it for you.
    </h5>
         <form onSubmit={formik.handleSubmit}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Enter your Youtube Recipe URL:</b></label></div>
            <div className='col-lg-6'><input type="url" className='form-control'  required
              onChange={formik.handleChange} value={formik.values.url} name='url'></input></div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Add Description:</b></label></div>
            <div className='col-lg-6'><input type="text" className='form-control' 
            placeholder='Do you want to add cooking instruction?' 
              onChange={formik.handleChange} value={formik.values.description} name='description'></input></div>
          </div>

           
          
          <div className='col-lg-12 mt-3 text-center'><input type="submit"   
          className='btn' id='button' value="Post Order"></input></div>
        </div>
         
      </form>
    </>

  )
}

export default Addrecipe
