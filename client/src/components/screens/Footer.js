import React from 'react'
import 'materialize-css'
import logo from '../../main.png'
export default function Footer() {
  
    return (
        <div style={{background:"transparent"}}>
            
        <footer class="page-footer" style={{background:"transparent"}}>
          <div class="container" style={{margin:'0 auto'}} >
            <div class="row">
              <div class="col l6 s12">
                <h5 class="black-text"><img src={logo} style={{height:"240px", margin:"-40px auto"}} alt=""/></h5>
                <p class="black-text text-lighten-4"></p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="black-text">Contact Us</h5>
                <ul>
                  <li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><i class="material-icons prefix"  style={{fontSize:"1.4rem",color:"black"}}>location_on</i><a class="black-text text-lighten-3" href="#!">&nbsp;Uco Bank Building, 2nd floor</a></li>
               
                  <li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><a class="black-text text-lighten-3" href="#!">Guntur,Andhra Pradesh 522007</a></li>
                  <li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><i class="material-icons prefix" style={{fontSize:"1.4rem",color:"black"}}>mail</i><a class="black-text text-lighten-3" href="#!">&nbsp;info@elixircommune.com</a></li>
                  <li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><img alt="whtsap-icon" src="https://res.cloudinary.com/elixircloud/image/upload/v1603905416/766px-WhatsApp.svg_kt2fxa.png" style={{height:'22px'}} /><a class="black-text text-lighten-3" href="#!">&nbsp;6303643843</a></li>
                  <a href="https://instagram.com/elixir_emagazine?igshid=4bnd6q1wibhj" target="_blank"><li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><img alt="insta-icon" src="https://res.cloudinary.com/elixircloud/image/upload/v1603907807/1200px-Instagram_logo_2016.svg_aqxjy2.png" style={{height:'22px'}} /><a class="black-text text-lighten-3" href="https://instagram.com/elixir_emagazine?igshid=4bnd6q1wibhj">&nbsp;elixir_emagazine</a></li></a>
                 
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright" style={{background:'#26a69a',color:"black",height:'20px'}}>
            <div class="container">
            <p style={{color:'white'}}>© 2020 Copyright Text</p>
  
            </div>
          </div>
        </footer>
        </div>
    )
}
