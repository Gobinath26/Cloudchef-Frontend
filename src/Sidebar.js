import React from "react";
import { Link } from "react-router-dom";
import './App.css';


export default function Sidebar({user,useremail}) {
    // console.log(user.Username);
    return (
        <div>
            <ul class="navbar-nav    sidebar sidebar-dark accordion" id="accordionSidebar">
 <div class="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div class="sidebar-brand-icon ">
                    <i class="fa fa-cutlery" aria-hidden="true"></i>
</div>
                    <div class="sidebar-brand-text mx-3">CLOUD CHEF</div>
                </div>


                <hr class="sidebar-divider my-0 " />


                {/* <li class="nav-item active">
                     <button className="profile">{useremail?useremail:
                      <Link to='/login'><button className="btn btn-sm" id='regbtn' >Login</button></Link>}</button>
                </li> */}

                <div class="sidebar-heading">
                    USER
                </div>

             
            

                <li class="nav-item">
                <Link class="nav-link collapsed" to='/addrecipe' data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Custom Order</span>
                    </Link>
                    </li>

                    <li class="nav-item">
                <Link class="nav-link collapsed" to='/customstatus' data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Custom Order Status</span>
                    </Link>
                    </li>

                    <li class="nav-item">
                <Link class="nav-link collapsed" to='/mycustomorder' data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>My Custom Order</span>
                    </Link>
                    </li>

                    <li class="nav-item">
               
                    </li>

                   

                <hr class="sidebar-divider" />

                <div class="sidebar-heading">
                    SHOP OWNER
                </div>

                <li class="nav-item">
                <Link class="nav-link collapsed" to='/ytorder' data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>YT Order</span>
                    </Link>
                    </li>

                 

                    <li class="nav-item">
                <Link class="nav-link collapsed" to='/addtomenu' data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Add To Menu</span>
                    </Link>
                    </li>

                    
                
                <hr class="sidebar-divider"/>
</ul>
                </div>
         
    )
}