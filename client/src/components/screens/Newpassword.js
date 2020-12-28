import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'
import '../../css/Signin.css'
import Loading from './Loading'
export default function Newpassword() {

    const history = useHistory()
    
    const [isLoading,setLoading] = useState(false)
    const [password,setPassword] = useState("");
    const email = JSON.parse(localStorage.getItem("user")).email
    // const [email,setEmail] = useState("");
    const PostData = () =>{
        setLoading(true);
        fetch("/update-password",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            email,
            password
        })
        })
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        if(data.error){
            setLoading(false)
            M.toast({html:data.error,classes:"red darken-3"})
        }

        else{
            setLoading(false)
            M.toast({html:data.message,classes:"green darken-1"})
            history.push('/')

        }
        }).catch(err=>{
        console.log(err)
        })
    }
    return (
        <div style={{position: 'absolute', width: '100%', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.60)', overflow: 'hidden',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
        {isLoading?<div><Loading/> <div style={{position:'absolute',bottom:'30%',left:"50%",transform:"translate(-50%,-50%)"}}><h4 style={{color:'turquoise',fontSize:'24px'}}>Signing in...</h4></div></div> :''}
       {isLoading? '': <div className="z-depth-2 signin-wrapper">
        <div className="row" style={{textAlign:"center"}}>
        {/* <div className="input-field col s12 m12">
            <i className="material-icons prefix">account_circle</i>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} id="username" type="text" className="validate"/>
            <label for="username">Username</label>
            </div> */}
            <div className="input-field col s12 m12">
            <i className="material-icons prefix">vpn_key</i>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" type="password" className="validate"/>
            <label for="password">New Password</label>
            </div>
            <div style={{padding:'10px 0'}}>
                <button onClick={()=>PostData()}  className="teal btn js-modal-show" style={{borderRadius:"0.7rem"}}>Update Password</button>
            </div>
    
            </div>
       </div>}
       </div>
    )
}
