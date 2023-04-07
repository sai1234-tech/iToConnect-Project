import React, { useState } from 'react'
import EmsLogo from '../Assets/logo.png'
import './Navbar.css'
function Navbar() {
  // const onClickMenu = ()=>{
  //   document.getElementById('menu').classList.toggle('icon');
  //   document.getElementById('nav').classList.toggle('change')

  //  }

  const [toggle, setToggle] = useState(false)

  const handleToggleclicked = () => {
    setToggle(!toggle)
  }

  return (
    <>
      {/* <div className="header">
          <div className="logo">
             <img src={EmsLogo}/>
           </div>
           <div className="top-nav-left">
              <span class="menu"></span> 
                <ul >
                    <li><a href="#" className="scroll"><span><b>Features</b></span></a></li>
                    <li><a href="#" className="scroll"><span><b>About</b></span></a></li>
                    <li><a href="#" className="scroll"><span><b>Contact us</b></span></a></li>
                    <li><a><span className="request">Request a D,emo</span></a></li>
                </ul>
           </div>
      </div> */}



      {/* <nav class="navbar navbar-expand-lg navbar-light mt-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img className="logo"src={EmsLogo}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggleclicked}>
      <span class="navbar-toggler-icon" ></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
      <li class="nav-item" id="nav_menu">
          <a class="nav-link" id="nav_link" href="#">Feature</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav_link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav_link" href="#">Contact us</a>
        </li>
        <li class="nav-item" id="request">
          
          <a class="nav-link" id="nav_lin" href="#">Request a Demo
          </a>
        </li>
   
      </ul>
    
    </div>
  </div>
</nav> */}

      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <div className="logo">
        <img src={EmsLogo}/>
          </div>
        <ul>
          {/* <li><a className="active" href="#">Home</a></li> */}
           <li><a href="#" className="scroll">Features</a></li>
           <li><a href="#" className="scroll">About</a></li>
           <li><a href="#" className="scroll">Contact us</a></li>
           <li><a href="#" className="scroll request">
            Request a Demo
              </a>
           {/* <a  type="button" className="request" data-bs-toggle="modal" data-bs-target="#exampleModal">
           Request a Demo
</a>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Fill Your Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      

          <div class="row">
            <div class="col-md-6">
            <label>FirstName</label>
            <input type="text"/>
            </div>
            
          </div>

     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
           </li>
           
        </ul>
      </nav>
      {/* <section>
        
      </section> */}
    </>
  )
}

export default Navbar