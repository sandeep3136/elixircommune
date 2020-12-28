import React from 'react'
import nfc from '../../images/nfc.jpg'
import '../../css/NFC.css'
import Button from '@material-ui/core/Button'
export default function NFC() {

    return (
        <div id="nfc-wrapper">
            <div className="col s12 m12">
            <div className="nfc-hd-dk">
                <h4>NOTE FOR CONTRIBUTORS</h4>
            </div>
            <div className="nfc-hd-mb">
                <h4 style={{lineHeight:'60%'}}>NOTE FOR </h4><h4 style={{lineHeight:'60%'}}>CONTRIBUTORS</h4>
            </div>
            </div>
            <div className="row" id="nfc-row2">
            <div className="col s12 m6 valign-wrapper" >    
            <p>Elixir invites content from the amateur writers of the engineering colleges across India, around the clock. Elixir is ready to publish your potential in the coming editions. 
                But before that make sure your article fulfils the requirements, which are explained below. <span><a href="/nfc"><Button color="secondary" style={{fontSize:"20px"}}>Read More</Button></a></span></p>
            </div>
            <div className="col s12 m6 center-align">
                <img src={nfc} style={{height:'240px'}} alt="nfc-img" />
            {/* <img src={nfc} alt="" /> */}
            </div>
            </div>
        </div>
    )
}
