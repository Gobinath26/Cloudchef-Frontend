import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import './App.css';

function Edit({useremail}) {
    let navigate = useNavigate();
    const params = useParams();
    useEffect(async () => {
        let userData = await axios.get(`https://cloud-chef.herokuapp.com/editcart/${params.id}`);
        console.log(userData.data[0]);
         formik.setFieldValue('itemname',userData.data[0].itemname)
        formik.setFieldValue('price',userData.data[0].price)
        formik.setFieldValue('quntity',userData.data[0].quntity)
         
        },[])
     
    const formik = useFormik({
    
        initialValues: {
          email:useremail,
          itemname:'',
          price:'',
          quntity:''
        },
        onSubmit: async (values) => {
          try {
            console.log(values);
            let data = await axios.put(`https://cloud-chef.herokuapp.com/editcart/${params.id}`, values)
             navigate('/cart');
             } catch (error) {
            console.log(error)
          }
        }
        })
       
  return (
  <>
    <div>Additem</div>
    <form onSubmit={formik.handleSubmit}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Dish Name:</b></label></div>
            <div className='col-lg-2'><input type="text" className='form-control' id='inputbox'
                 value={formik.values.itemname} name='itemname'></input></div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Price:</b></label></div>
            <div className='col-lg-1'><input type="text"  className='form-control' id='inputbox'
               value={formik.values.price} name='price'></input></div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Quntity:</b></label></div>
            <div className='col-lg-1'><input type="number" min="1" step="1" required
             className='form-control' id='inputbox'
             onChange={formik.handleChange} value={formik.values.quntity}  name='quntity'></input></div>
          </div>
          
          <div className='row mt-2'>
          
          <div className='col-lg-12 mt-3 text-center' >
              <input type="submit"   className='btn 'id='submitbutton' value="SUBMIT"></input></div>
        </div>
        </div>
      </form>
    </>
  )
}
export default Edit

 

 
