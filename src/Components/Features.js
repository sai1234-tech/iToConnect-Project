import React from 'react'
import './Features.css'

import MB from '../Assets/Newmac.png'
import High from '../Assets/highly.png'
import Automated from '../Assets/automated.png'
import Modular from '../Assets/modular.png'

function Features() {
  return (
    <div id="features">
        <div className="feature_section">
              <p className="features">Features</p>
              <div class="row ">
                <div class="col-md-6">
                  
                    <p className="feature_description">
                    <small style={{color:'#F26727'}}>Our Centralized dashboard </small>
                    enables you to <br/> efficiently scale your outreach while staying in control <br/> of your campaign.

                    </p>
                    <p className="feature_description"><span style={{color:'#F26727'}} >Effective Communication </span>with ease by utilizing <br/>dynamic supporter data to personalize your messag.</p>
			  <p className="feature_description"><span style={{color:'#F26727'}} >Efficiently segment your audiences </span>by utilizing<br/> sophisticated filters and tags to identify the most <br/> relevant recipients for your messages.</p>
			  <p className="feature_description"><span style={{color:'#F26727'}} >Measure the success </span>of your campaigns with ease by <br/>keeping track of essential metrics.</p>
                </div>

                <div class="col-md-6">
                    <img src={MB} className="feature_img"/>
                </div>
              </div>

              <div className="features_display">
                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-2" id="img_sec1img">
                        <img src={High} className="img_sec"  />
                    </div>
                    <div class="col-md-2"></div>

                    <div class="col-md-2" id="img_sec2img">
                        <img src={Automated} className="img_sec"/>
                    </div>
                    <div class="col-md-2"></div>

                    <div class="col-md-2" id="img_sec3img">
                        <img src={Modular} className="img_sec"/>
                    </div>
                    <div class="col-md-2"></div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Features