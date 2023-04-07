import React from 'react'
import Insta from '../Assets/insta.png'
import FaceBook from '../Assets/facebook.png'
import linkedin from '../Assets/linkedin.png'
import Youtube from '../Assets/youtube.png'
import Twitter from '../Assets/twitter.png'
import IToConnect from '../Assets/itoconnectfooterlogo.png'
import Logo from '../Assets/logo.png'
import './Footer.css'

function Footer() {
  return (
    <div>
      	 {/* <div class="footer" >
				<div class="row">
					<div class="col-md-2">
						<img className="footerLogo" src={IToConnect} alt="footer"/>
					</div>
					<div class="col-md-6" 
          >
						<div class="col-md-2">
						<img className="footerLogo" src={Insta} alt="footer"/>
					    </div>
						<div class="col-md-2">
							<img className="footerLogo" src={FaceBook} alt="footer"/>
						</div>
						<div class="col-md-2">
							<img className="footerLogo" src={linkedin} alt="footer"/>
						</div>
						<div class="col-md-2">
							<img className="footerLogo" src={Twitter} alt="footer"/>
						</div>
						<div class="col-md-2">
							<img className="footerLogo" src={Youtube} alt="footer"/>
						</div>
							
					</div>
				</div>
			</div>   */}

      <div className="footer">
          <div class="row">
            <div class="col-md-4">
           <img src={IToConnect} className="itoconnect_logo"/>
            </div>
            <div class="col-md-2"></div>

            <div class="col-md-6">
                 <div class="row">
                     <div class="col-md-2">
                     <img className="footerLogo" id="Logo1"  src={Insta} alt="footer"/>
                     </div>
                     
                     <div class="col-md-2">
                     <img className="footerLogo" id="Logo2" src={FaceBook} alt="footer"/>
                     </div>

                     <div class="col-md-2">
                     <img className="footerLogo" id="Logo3" src={linkedin} alt="footer"/>
                     </div>
                     
                     <div class="col-md-2">
                     <img className="footerLogo" id="Logo4" src={Twitter} alt="footer"/>
                     </div>

                     <div class="col-md-2">
                     <img className="footerLogo" id="Logo5" src={Youtube} alt="footer"/>
                     </div>

                 </div>
            </div>
          </div>
      </div>
		
    </div>
  )
}

export default Footer