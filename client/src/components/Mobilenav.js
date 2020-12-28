import React,{useEffect,useContext} from 'react'
import '../css/Mobilenav.css'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import home from '../images/menu-icons/HOME.png'
import aboutus from '../images/menu-icons/About Us.png'
import editions from '../images/menu-icons/editionsICON.png'
import nfc from '../images/menu-icons/NFC.png'
import subscribe from '../images/menu-icons/SUBSCRIBE.png'
import  login from '../images/menu-icons/SIGN IN.png'
import logout from '../images/menu-icons/SIGN OUT.png'
import $ from 'jquery'
const Mobilenav = () => {
    const history = useHistory();
	
  const {state,dispatch} = useContext(UserContext)
  const renderList = ()=>{
    if(state){
          return (
            <>      
            <div className="menu fancy-menu" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
  
                </div> 
            <div className="circle" id="menu">
            <div className="ring">
                <div className="menuItem">
                <Link to="/"><img alt="menu-icons" src={home} height="40px" /></Link>
                </div>
                <div className="menuItem">
                <Link to="/editions"><img alt="menu-icons" src={editions} height="40px" /></Link>
                </div>
                <div className="menuItem">
                <Link to="/aboutus"><img alt="menu-icons" src={aboutus} height="40px" /></Link>
                </div>
                <div className="menuItem">
                <Link to="/nfc"><img alt="menu-icons" src={nfc} height="40px" /></Link>
                </div>
                
                <div className="menuItem">
                <Link to="/subscribe"><img alt="menu-icons" src={subscribe} height="40px" /></Link>
                </div>
                
                <div className="menuItem">
                    <img alt="menu-icons" src={logout}
                     height="40px" 
                     onClick={()=>{
                        localStorage.clear()
                        dispatch({type:"CLEAR"})
                        history.push('/signin')
                    }} 
                     />
                </div>
                <div className="center-img menu">
                <img alt="menu-icons"  src="https://res.cloudinary.com/elixircloud/image/upload/v1608280192/fav_qcz3b7.png" height="50px"/>
                    </div>
            </div>
            
          </div>
          </>
          )
  }else{
          return (
            <>
             
             
               
              
               <div className="menu fancy-menu" href="#">
                       <span></span>
                       <span></span>
                       <span></span>
                  
                   </div> 
            <div className="circle" id="menu">
            <div className="ring">
                <div className="menuItem">
                <Link to="/"><img alt="menu-icons" src={home} height="40px" /></Link>
                </div>
                <div className="menuItem">
                <Link to="/editions"><img alt="menu-icons" src={editions} height="40px" /></Link>
                </div>
                <div className="menuItem">
                <Link to="/aboutus"><img alt="menu-icons" src={aboutus} height="40px" /></Link>
                </div>
                <div className="menuItem">
                <Link to="/nfc"><img alt="menu-icons" src={nfc} height="40px" /></Link>
                </div>
                
                <div className="menuItem">
                <Link to="/subscribe"><img alt="menu-icons" src={subscribe} height="40px" /></Link>
                </div>
                
                <div className="menuItem">
                    <Link to="/signin">
                    <img alt="menu-icons" src={login} height="40px"/>
                    </Link>
                </div>
            </div>
            <div className="center-img">
            <img  alt="menu-icons" src="https://res.cloudinary.com/elixircloud/image/upload/v1608280192/fav_qcz3b7.png" height="50px"/>
            </div>
          </div>
          </>
          )
              
  }
  }
    useEffect(() => {
        //draggable code
        $('.fancy-menu').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
          });
        //menu items
        var items = document.querySelectorAll('.menuItem');

        for(var i = 0, l = items.length; i < l; i++) {
          items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
          
          items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        }
        
        document.querySelector('.menu').onclick = function(e) {
           e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        }
        
    }, [])
    return (
        <>
      
      {renderList()}

     </>
    )
}

export default Mobilenav
