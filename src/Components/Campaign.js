import React from 'react'
import './Campaign.css'
import Research from '../Assets/research.png'
import Strategy from '../Assets/strategy.png'
import Connect from '../Assets/connect.png'
import PAC from '../Assets/pac.png'
import GOTV from '../Assets/gotv.png'

function Campaign() {
    return (
        <div>
            <div className="campaign_container-fluid">
                <p className="content-political">PCC</p>
                <p className="content-political-description">Political Campaign Connect</p>
                <div className="camp_pain">


                <div class="row">

                    <div class="col-md-4">
                        <img src={Research} className="com_img" />
                        <p class="headingElipse">
                            Research
                        </p>
                        <p class="headingDescription">
                            A realistic assessment with our unique methodology breaks down each <br/>campaign to ensure maximum <br/>efficiency in your constituency
                        </p>
                    </div>

                    <div class="col-md-4">
                        <img src={Strategy} className="com_img"/>
                        <p class="headingElipse">
                            Strategy
                        </p>
                        <p class="headingDescription">
                                 PCC provides a unique perspective <br/> into  the electoral process, making <br/> each campaign unique and having a customized approach to ensure <br/>success               
                          </p>
                    </div>

                    <div class="col-md-4">
                        <img src={Connect} className="com_img" />
                        <p class="headingElipse">
                            Connect
                        </p>
                        <p class="headingDescription">
                        Our tailored campaigns help Connect <br/> you with target Voters by developing a <br/> persuasive message.                        </p>
                    </div>
                 <div class="col-md-2"></div>

                    <div class="col-md-4 mt-5">
                        <img src={PAC} className="com_img" />
                        <p class="headingElipse">
                            PAC
                            <br/>
                            <span className="abbreviations">Profiling & Analysis of Constituency</span>
                        </p>
                        <p class="headingDescription">
                        We use Data to get you every detail <br/>about your constituency, voters, there <br/> will be no room for error                        </p>
                    </div>

                    {/* <div class="col-md-1"></div> */}

                     
                    <div class="col-md-4 mt-5">
                        <img src={GOTV} className="com_img"/>
                        <p class="headingElipse">
                            GOTV<br/>
                            <span className="abbreviations">Get-Out-To-Vote</span>
                        </p>
                        <p class="headingDescription">
                        With our state of the art technology we <br/> provide the maximum push to voters to <br/>come out and vote                        </p>
                    </div>

                </div>
                </div>


            </div>
        </div>
    )
}

export default Campaign