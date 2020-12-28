import React,{useContext} from 'react'
import './Toolbar.css'
import logo from '../../main.png'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
// import DrawerToggleButton from '../sidedrawer/DrawerToggleButton'
// import userimg from '../../images/menu-icons/USER.png'

const Toolbar = props => {
    const history = useHistory();
	
  const {state,dispatch} = useContext(UserContext)
  const renderList = ()=>{
  if(state){
    const user = JSON.parse(localStorage.getItem("user"))
    if(user.email === "elixir.commune@gmail.com")
    {
        return [
        <li ><Link to="/">Home</Link></li>,
    <li ><Link to="/editions">Editions</Link></li>,   
    <li ><Link to="/aboutus">About Us</Link></li>,
    <li ><Link to="/nfc"><p style={{textAlign:'center',lineHeight:'1.2',padding:'20px 0'}}>Note For<br/> Contributors</p></Link></li>,
    <li ><Link to="/post">Post</Link></li>,
    <li ><Link to="/users">Users</Link></li>,
    <li ><Link to="/subscribe">Subscribe</Link></li>,
            <li><button className="button-primary"
            onClick={()=>{
                localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push('/signin')
            }} 
            >Sign Out</button></li>
            ]
    }
    else{
        return [
            <li ><Link to="/">Home</Link></li>,
    <li ><Link to="/editions">Editions</Link></li>,        
    <li ><Link to="/aboutus">About Us</Link></li>,
    <li ><Link to="/nfc"><p style={{textAlign:'center',lineHeight:'1.2',padding:'20px 0'}}>Note For<br/> Contributors</p></Link></li>,
    <li ><Link to="/subscribe">Subscribe</Link></li>,
        <li><Link to="/profile"><p style={{color:'white',fontSize:'2.1rem',fontFamily:'Carter One',background:'teal',padding:'10px',margin:'-20px auto',borderRadius:'50%',padding: '10px 15px',lineHeight: '1.2'}}
        // onClick={()=>{
        //     localStorage.clear()
        //     dispatch({type:"CLEAR"})
        //     history.push('/signin')
        // }} 
        >{user.name.substring(0,1)}</p></Link></li>
        ]
    }
}else{
        return [
            <li ><Link to="/">Home</Link></li>,
    <li ><Link to="/editions">Editions</Link></li>,        
    <li ><Link to="/aboutus">About Us</Link></li>,
    <li ><Link to="/nfc"><p style={{textAlign:'center',lineHeight:'1.2',padding:'20px 0'}}>Note For<br/> Contributors</p></Link></li>,
    <li ><Link to="/subscribe">Subscribe</Link></li>,
          <li ><Link to="/signin"><button className="button-primary">Sign In</button></Link></li>
        ]
}
}
    return(

        <header className="toolbar">
            <nav className="toolbar_navigation">
                {/* <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div> */} 
                <div className="toolbar_logo"><Link to={state?"/":"/signin"}><img src={logo} alt="logo"/></Link> </div>
                <div className="spacer"></div>
                <div className="toolbar_nav-items">
                    <ul>
                        {renderList()}
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Toolbar
