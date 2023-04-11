import React from 'react'
import Location from '../Assets/location.png'
import Email from '../Assets/email.png'
import './Contact.css'

function Contact() {
    return (
        <div>
            <div className="Contact">
                <div class="content-Contact">
                    <span>Contact Us</span>
                </div>
                <div class="row">

                    <div class="col-md-7">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184196!2d77.20653218793268!3d28.62890171870613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1680519961254!5m2!1sen!2sin"
                                // width="503" height="370"
                                style={{ "border": "0" }}
                                allowfullscreen=""
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                        </div>
                    </div>

                    <div class="col-md-5" id="contact-right-div">
                        {/* <div className="loc">
                        <img src={Location} className=""/>

                        </div>
                             <div>
                             <span class="infoText">Connaught Place,</span><br/>
                                 <span class="infoText">New Delhi - 110001</span>
                             </div> */}

                           <div class="row">
                            
                               <div class="col-md-1" id="loc">
                                <img src={Location} className="contact_img"/>


                               </div>
                               <div class="col-md-5" id="te" >
                               <span class="infoText">Connaught Place,</span><br/>
                                 <span class="infoText">New Delhi - 110001</span>
                               </div>

                               <div class="col-md-6"></div> 
                           </div> 
                           <div class="row">
                            
                               <div class="col-md-1 mt-5" id="info">
                               <img src={Email} className="contact_img"/>

                               </div>
                               <div class="col-md-5 mt-5"  id="tech">
                               <span class="infoText">&nbsp;info@itoconnect.com,</span><br/>
                                 <span class="infoText">+91 82639 60960</span>
                               </div>

                               <div class="col-md-6"></div> 
                           </div> 

                        {/* <div class="row" id="">
                            <div class="col-md-8">
                                <img src={Location} className="contact_img"/>
                                
                                 <span class="infoText">&nbsp;&nbsp;&nbsp;&nbsp;Connaught Place,</span><br/>
                                 <span class="infoText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Delhi - 110001</span>
                            </div>
                        </div> */}
                        {/* <br/><br/> */}
                        {/* <div class="row" >
				<div class="col-md-8">
					<img  src={Email}  className="contact_img"/>
					<span class="infoText">&nbsp;&nbsp;&nbsp;&nbsp;info@itoconnect.com</span><br/>
					<span class="infoText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 82639 60960</span>
				</div>
			</div> */}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact