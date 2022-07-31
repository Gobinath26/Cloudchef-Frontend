import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

 function Accept() {
     let navigate = useNavigate()
    const params=useParams();
    useEffect(async () => {
        fetchitem()
        }, [])
    
      let fetchitem = async () => {
        try {
            console.log(params.id);
            let itemdetials = await axios.get(`https://cloud-chef.herokuapp.com/ytorder/${params.id}`);
            console.log(itemdetials.data[0]);
          formik.setFieldValue('url',itemdetials.data[0].url)
          formik.setFieldValue('description',itemdetials.data[0].description)

            } catch (error) {
            console.log(error)
        }
    }
    const formik = useFormik({
        initialValues: {
           url:'',
           description:'',
           status:'taken',
           cusconfirm:'no',
           orderprice:''
        },
        onSubmit: async (values) => {
          try {
            console.log(values);
            let data = await axios.put(`https://cloud-chef.herokuapp.com/ytorder/${params.id}`, values)
            alert('Custom order is taken and price will appear in custom order status section')
             navigate('/dashboard')
            } catch (error) {
            console.log(error)
          }
        }
        
      })
  return (
    <>
         <form onSubmit={formik.handleSubmit}>
        <div className='container mt-5'>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Enter Price For This Custom Order:</b></label></div>
            <div className='col-lg-6'><input type="number" className='form-control'  min={1} required
              onChange={formik.handleChange} value={formik.values.orderprice} name='orderprice'></input></div>
          </div>
          
 <div className='col-lg-12 mt-3 text-center'><input type="submit"   
          className='btn' id='button' value="Submit"></input></div>
        </div>
         
      </form>
    </>
  )
}

export default Accept
