import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

function Dashboard({useremail}) {
    var navigate = useNavigate();
    var cartarr = [];
    const [menuarr, setmenuarr] = useState([]);
    const [quntity, setquntity] = useState(0);
    const [cart, setcart] = useState();
    var params = useParams();
    useEffect(async () => {
        fetchmenu()
    }, [])

    let fetchmenu = async () => {
        try {
            if(useremail!==null){
                let menu = await axios.get(`https://cloud-chef.herokuapp.com/menu`, {
                    headers: {
                        Authorization: window.localStorage.getItem("my_token")
                    }
                });
                setmenuarr(menu.data)
            }else{
                alert("Login to see Menu");
                navigate('/login')
            }
           
        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <>
             <div className='container' id='cardcontainer'>
                {
                    menuarr.map((obj, index) => {
                        return <div>
                            <div class="card mt-4 ml-4" id='card' key={index} >
                                <p class="card-text mt-1">{obj.description}</p>
                                <img class="card-img-top" id='image' src={obj.url} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">{`₹ ${obj.price}`}</p>
                                    
                                  <Link to={`/additem/${obj._id}`}> <button className='btn  btn-light'
                                         
                                    ><b>ADD</b></button></Link> 
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>

    )
}

export default Dashboard


