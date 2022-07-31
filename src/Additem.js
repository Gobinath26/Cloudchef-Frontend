import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import './App.css';

function Additem({useremail}) {
    const Navigate = useNavigate();
    const[item,setitem]=useState();
    const[price,setprice]=useState();
    const params=useParams();
    useEffect(async () => {
        fetchitem()
        }, [])
    
      let fetchitem = async () => {
        try {
            console.log(params.id);
            let itemdetials = await axios.get(`https://cloud-chef.herokuapp.com/menu/${params.id}`);
            console.log(itemdetials.data[0]);
           formik.setFieldValue('itemname',itemdetials.data[0].description)
            formik.setFieldValue('price',itemdetials.data[0].price)
            } catch (error) {
            console.log(error)
        }
    }
    const formik = useFormik({
    
        initialValues: {
          email:useremail,
          itemname:'',
          price:'',
          quntity:'',
          itemtotal:0,
          payment:'not paid',
        },
        onSubmit: async (values) => {
          try {
            console.log(values);
            let data = await axios.post("https://cloud-chef.herokuapp.com/cart", values)
             Navigate('/cart');
             } catch (error) {
            console.log(error)
          }
        }
        })
       
  return (
  <>
     <form onSubmit={formik.handleSubmit}>
        <div className='container' id='additemconter'>
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

export default Additem
