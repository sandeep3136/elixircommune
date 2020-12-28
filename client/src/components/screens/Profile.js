import React,{useEffect,useState,useContext} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import M from 'materialize-css'
import 'react-tabs/style/react-tabs.css';
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
const Profile = () => {
    const history = useHistory();
	
    const {state,dispatch} = useContext(UserContext)
    const [name,setName] = useState("");
    const [password,setPassword]=useState("")
    const [college,setCollege] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [contributions,setContributions] = useState("");
    const mail = JSON.parse(localStorage.getItem("user")).email
    const PostData = () =>{
        fetch("/profile",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name,
            email,
            college,
            mobile,
            password,
            contributions
        })
        })
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        if(data.error){

            M.toast({html:data.error,classes:"red darken-3"})
        }

        else{
            
            M.toast({html:data.message,classes:"green darken-1"})

        }
        }).catch(err=>{
        console.log(err)
        })
    }
    useEffect(()=>{
       
       fetch("/details",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                mail
            })
            })
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
            if(data.error){
                console.log(data.error)
            }
    
            else{
                console.log(data)
                console.log(data.user.name)
               setName(`${data.user.name}`)
               setEmail(`${data.user.email}`)
               setMobile(`${data.user.mobile}`)
               setCollege(`${data.user.college}`)
               setContributions(`${data.user.contributions}`)
            }
            }).catch(err=>{
            console.log(err)
            })
    },[])
   
    
    return (
        <div className="z-depth-4" style={{background:'white',margin:'50px auto',width:'60%'}}>
        <Tabs>
            <TabList>
                <Tab>Profile</Tab>
                <Tab>Manage Pofile</Tab>
                <Tab>Update Password</Tab>
            </TabList>

            <TabPanel>
            <table className="responsive-table" style={{display:'flex',justifyContent:'center'}}>
        <tbody>
                <tr style={{border:'none'}}>
                    <td>Name : </td>
                    <td>{name}</td>
                </tr>
                <tr style={{border:'none'}}>
                    <td>Email : </td>
                    <td>{email}</td>
                </tr>
                <tr style={{border:'none'}}>
                    <td>College</td>
                    <td>{college}</td>
                </tr>
                <tr style={{border:'none'}}>
                    <td>Phone(Whatsapp) : </td>
                    <td>{mobile}</td>
                </tr>
                <tr style={{border:'none'}}>
                    <td>Contributions : </td>
                    <td>{contributions}</td>
                </tr>
                <tr style={{border:'none'}}>
                    <td><button  
                     onClick={()=>{
                        localStorage.clear()
                        dispatch({type:"CLEAR"})
                        history.push('/signin')
                    }} 
                    className="btn teal lighten-1">Logout</button></td>
                </tr>
                
        </tbody>
    </table>
            </TabPanel>
            <TabPanel>
         <table className="responsive-table" style={{display:'flex',justifyContent:'center'}}>
         <tbody>
                 <tr style={{border:'none'}}>
                     <td><label for="name">Name</label><input id="name" value={name} onChange={(e)=>setName(e.target.value)}/></td>
                     <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                     <td><label for="email">Email</label><input id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
                 </tr>
                 <tr style={{border:'none'}}>
                 <td><label for="clg" >College </label><input value={college} onChange={(e)=>setCollege(e.target.value)} id="clg"/></td>
                 <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                 <td><label for="ph" > Phone(Whatsapp)</label><input value={mobile} onChange={(e)=>setMobile(e.target.value)} id="ph"/></td>
                 </tr>
                 <tr style={{border:'none'}}>
                     <td><label for="cntrb">Contributions</label><input id="cntrb" value={contributions} onChange={(e)=>setContributions(e.target.value)} /></td>
                     <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                     <td><button  onClick={()=>PostData()} className="btn teal lighten-1">Save</button></td>
                 </tr>
         </tbody>
     </table>
            </TabPanel>
            <TabPanel>
                <br/>
            <div style={{width:'50%',margin:'20px auto'}}>
            <div className="input-field col s12 m12">
                 <i className="material-icons prefix">vpn_key</i>
                 <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" type="password" className="validate"/>
                 <label for="password">New Password</label>
                 </div>
                 <div style={{padding:'10px 0'}}>
                     <button onClick={()=>PostData()}  className="teal btn js-modal-show" style={{borderRadius:"0.7rem"}}>Update Password</button>
                 </div>
                 </div>
                 <br/>
            </TabPanel>
  </Tabs>
  </div>
    )
}

export default Profile
