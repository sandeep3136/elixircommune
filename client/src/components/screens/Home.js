import React,{useState,useEffect,useContext} from 'react'
import '../../css/Home.css'
import ElixirInfo from './ElixirInfo'
import NFC from './NFC'
import Slider from './Slider'
import Testimonals from './Testimonals'
import Footer from './Footer'
import Mbslider from './Mbslider'
import {UserContext} from '../../App'
import SigninPopUpTimeDelay from './SigninPopUpTimeDelay';
import Whatsapp from './Whatsapp';
export default function Home() {
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
  useEffect(() => {
    fetch('/slides',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
       setData(result.posts)
    })
   
    
  },[])
  if(!state){
    return (
      <>
      
      < div style={{margin:'auto',display:'block'}}>
        <SigninPopUpTimeDelay/>
      <div id="top-desktop">
       
        <div>
          <br/>
          <ElixirInfo/>
        </div>
        <div className="slider-wrapper">
        <Slider/>
        </div>
        
      </div>
      <div id="top-mobile">
        
        <div className="mbslider">
          <Mbslider/>
        </div>
        <div>
          <ElixirInfo/>
        </div>
      </div>
      <NFC/>
      
      <Testimonals/>
      <Footer/>
      <Whatsapp/>
      {/* <ScrollToTop smooth /> */}
      </ div>
      
      </>
    )
  }
  else{
    return(
      < div style={{margin:'auto',display:'block'}}>
        {/* <Mobilemenu/> */}
      <div id="top-desktop">
       
        <div>
          <br/>
          <ElixirInfo/>
        </div>
        <div className="slider-wrapper">
        <Slider/>
        </div>
        
      </div>
      <div id="top-mobile">
        
        <div className="mbslider">
          <Mbslider/>
        </div>
        <div>
          <ElixirInfo/>
        </div>
      </div>
      <NFC/>
      
      <Testimonals/>
      <Footer/>
      
      {/* <div id="WAButton" className="floating-wpp"></div> */}
      <Whatsapp/>
     
      {/* <ScrollToTop smooth /> */}
      </ div>
    )
  }

    
    
}
