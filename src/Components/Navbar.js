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




      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <div className="logo">
        <img src={EmsLogo}/>
          </div>
        <ul>
           <li><a href="#features" className="scroll">Features</a></li>
           <li><a href="#about" className="scroll">About</a></li>
           <li><a href="#contact_section" className="scroll">Contact us</a></li>
           <li><a href="#" className="scroll 
            ">
            {/* Request a Demo */}
              </a>
            <a  type="button" className="request" data-bs-toggle="modal" data-bs-target="#exampleModal">
           Request a Demo
</a>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Fill Your Details</h1>
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
        <a  class="btn-close" data-bs-dismiss="modal" aria-label="" id="close"></a>
      </div>
      <div class="modal-body">
        <form>

          <div class="row">
            <div class="col-md-6">
            <label style={{"color":"#056b38"}} className="f_n">FirstName <span style={{'color':'red'}}>*</span></label>
            <br/>
            <input type="text" className="fn"/>
            </div>

            <div class="col-md-6">
            <label style={{"color":"#056b38"}} className="f_n">LastName <span style={{'color':'red'}}>*</span></label>
            <br/>
            <input type="text" className="fn"/>
            </div>

            <div class="col-md-6">
            <label style={{"color":"#056b38"}} className="f_n">Email<span style={{'color':'red'}}>*</span></label>
            <br/>
            <input type="text" className="fn"/>
            </div>

            <div class="col-md-6">
            <label style={{"color":"#056b38"}} className="f_n">Mobile<span style={{'color':'red'}}>*</span></label>
            <br/>
            <input type="text" className="fn"/>
            </div>

            <div class="col-md-6">
            <label style={{"color":"#056b38"}} className="f_n">Constituency<span style={{'color':'red'}}>*</span></label>
            <br/>
            <input type="text" className="fn"/>
            </div>
            
            <div class="col-md-6">
            <label style={{"color":"#056b38"}} className="f_n">Description<span style={{'color':'red'}}>*</span></label>
            <br/>
            <input type="text" className="fn"/>

						{/* <textarea id='Description' name='Description'></textarea> */}
            </div>

            <button type="btn" class="btn btn-secondary mt-3" id="submit">Submit</button>
            
            
          </div>
</form>
     
      </div>
      
    </div>
  </div>
</div> 
           </li>
           
        </ul>
      </nav>
   
    </>
  )
}

export default Navbar