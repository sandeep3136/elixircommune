import React,{useContext} from 'react'
import './SideDrawer.css'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    
    const history = useHistory();
	
    const {state,dispatch} = useContext(UserContext)
    const renderList = ()=>{
    if(state){
      const user = JSON.parse(localStorage.getItem("user"))
      if(user.email === "elixir.commune@gmail.com")
      {
          return [
              <li onClick={props.click}><Link to="/"><i className="material-icons">home</i></Link></li>,
      <li onClick={props.click}><Link to="/editions"><i className="material-icons">local_library</i> </Link></li>,        
      <li onClick={props.click}><Link to="/aboutus"><i className="material-icons">group</i></Link></li>,
      <li onClick={props.click}><Link to="/nfc"><i className="material-icons">description</i></Link></li>,
      <li onClick={props.click}><Link to="/post">Post</Link></li>,
      <li onClick={props.click}><Link to="/users">Users</Link></li>,
      <li onClick={props.click}><Link to="/subscribe"><i className="material-icons">subscriptions</i></Link></li>,
              <li onClick={props.click}><button style={{margin: '20px auto',color:'white',background: 'linear-gradient(#0c58a7, #0b3a83)',borderRadius: '1.25rem',border:'none',boxShadow: '0 1px 1px rgba(255, 255, 255, 0.4) inset',padding:'0 10px'}}
              onClick={()=>{
                  localStorage.clear()
                  dispatch({type:"CLEAR"})
                  history.push('/signin')
              }} 
              ><i className="material-icons" style={{color:'white',fontSize:'25px'}}>power_settings_new</i></button></li>
              ]
      }
      else{
          return [
              <li onClick={props.click}><Link to="/"><i className="material-icons">home</i></Link></li>,
      <li onClick={props.click}><Link to="/editions"><i className="material-icons">local_library</i> </Link></li>,        
      <li onClick={props.click}><Link to="/aboutus"><i className="material-icons">group</i></Link></li>,
      <li onClick={props.click}><Link to="/nfc"><i className="material-icons">description</i></Link></li>,
      <li onClick={props.click}><Link to="/subscribe"><i className="material-icons">subscriptions</i></Link></li>,
          <li onClick={props.click}><button style={{margin: '20px auto',color:'white',background: 'linear-gradient(#0c58a7, #0b3a83)',borderRadius: '1.25rem',border:'none',boxShadow: '0 1px 1px rgba(255, 255, 255, 0.4) inset',padding:'0 10px'}}
          onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/signin')
          }} 
          ><i className="material-icons" style={{color:'white',fontSize:'25px'}}>power_settings_new</i></button></li>
          ]
      }
  }else{
          return [
              <li onClick={props.click}><Link to="/"><i className="material-icons">home</i></Link></li>,
      <li onClick={props.click}><Link to="/editions"><i className="material-icons">local_library</i> </Link></li>,        
      <li onClick={props.click}><Link to="/aboutus"><i className="material-icons">group</i></Link></li>,
      <li onClick={props.click}><Link to="/nfc"><i className="material-icons">description</i></Link></li>,
      <li onClick={props.click}><Link to="/subscribe"><i className="material-icons">subscriptions</i></Link></li>,
      <li onClick={props.click}><Link to="/signin"><button style={{margin: '20px auto',color:'white',background: 'linear-gradient(#0c58a7, #0b3a83)',borderRadius: '1.25rem',border:'none',boxShadow: '0 1px 1px rgba(255, 255, 255, 0.4) inset',padding:'0 10px'}}><i className="material-icons" style={{color:'white',fontSize:'25px'}}>input</i></button></Link></li>
          ]
  }
  }
    return(
        <nav className={drawerClasses}>
            {/* <Link to={state?"/":"/signin"}><img  src={logo} alt="logo" style={{height:'140px',transform:'translate(20%)',marginBottom:'-30px'}} /></Link> */}
        <ul>
        {renderList()}
        </ul>
    </nav>
    )
};

export default SideDrawer


