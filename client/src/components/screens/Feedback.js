import React,{useEffect,useState,useContext} from 'react'
import '../../css/Feedback.css'
import {UserContext} from '../../App'
import {useLocation} from 'react-router-dom'
import $ from 'jquery'
import gsap from 'gsap'
const Feedback = () => {
    const location = useLocation();
    const {state,dispatch} = useContext(UserContext)
    const [feedback,setFeedback] = useState("");
    var email = "notsubscribed@gmail.com";
    if(state){
        email = JSON.parse(localStorage.getItem("user")).email;
    }
    console.log(location.pathname)
    // const [email,setEmail] = useState("");
    const PostData = () =>{
        fetch(`${location.pathname}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            email,
            feedback
        })
        })
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        }).catch(err=>{
        console.log(err)
        })
    }
    useEffect(() => {
        
        document.querySelectorAll('.send-button').forEach(button => {

            let getVar = variable => getComputedStyle(button).getPropertyValue(variable);
        
            button.addEventListener('click', e => {
        
                if(!button.classList.contains('active')) {
        
                    button.classList.add('active');
        
                    gsap.to(button, {
                        keyframes: [{
                            '--left-wing-first-x': 50,
                            '--left-wing-first-y': 100,
                            '--right-wing-second-x': 50,
                            '--right-wing-second-y': 100,
                            duration: .2,
                            onComplete() {
                                gsap.set(button, {
                                    '--left-wing-first-y': 0,
                                    '--left-wing-second-x': 40,
                                    '--left-wing-second-y': 100,
                                    '--left-wing-third-x': 0,
                                    '--left-wing-third-y': 100,
                                    '--left-body-third-x': 40,
                                    '--right-wing-first-x': 50,
                                    '--right-wing-first-y': 0,
                                    '--right-wing-second-x': 60,
                                    '--right-wing-second-y': 100,
                                    '--right-wing-third-x': 100,
                                    '--right-wing-third-y': 100,
                                    '--right-body-third-x': 60
                                })
                            }
                        }, {
                            '--left-wing-third-x': 20,
                            '--left-wing-third-y': 90,
                            '--left-wing-second-y': 90,
                            '--left-body-third-y': 90,
                            '--right-wing-third-x': 80,
                            '--right-wing-third-y': 90,
                            '--right-body-third-y': 90,
                            '--right-wing-second-y': 90,
                            duration: .2
                        }, {
                            '--rotate': 50,
                            '--left-wing-third-y': 95,
                            '--left-wing-third-x': 27,
                            '--right-body-third-x': 45,
                            '--right-wing-second-x': 45,
                            '--right-wing-third-x': 60,
                            '--right-wing-third-y': 83,
                            duration: .25
                        }, {
                            '--rotate': 55,
                            '--plane-x': -8,
                            '--plane-y': 24,
                            duration: .2
                        }, {
                            '--rotate': 40,
                            '--plane-x': 45,
                            '--plane-y': -180,
                            '--plane-opacity': 0,
                            duration: .3,
                            onComplete() {
                                setTimeout(() => {
                                    button.removeAttribute('style');
                                    gsap.fromTo(button, {
                                        opacity: 0,
                                        y: -8
                                    }, {
                                        opacity: 1,
                                        y: 0,
                                        clearProps: true,
                                        duration: .3,
                                        onComplete() {
                                            button.classList.remove('active');
                                        }
                                    })
                                }, 2000)
                            }
                        }]
                    })
        
                    gsap.to(button, {
                        keyframes: [{
                            '--text-opacity': 0,
                            '--border-radius': 0,
                            '--left-wing-background': getVar('--primary-darkest'),
                            '--right-wing-background': getVar('--primary-darkest'),
                            duration: .1
                        }, {
                            '--left-wing-background': getVar('--primary'),
                            '--right-wing-background': getVar('--primary'),
                            duration: .1
                        }, {
                            '--left-body-background': getVar('--primary-dark'),
                            '--right-body-background': getVar('--primary-darkest'),
                            duration: .4
                        }, {
                            '--success-opacity': 1,
                            '--success-scale': 1,
                            duration: .25,
                            delay: .25
                        }]
                    })
        
                }
        
            })
        
        });
        
        $("#fdbk").click(()=>{
            if($(".feedback-wrapper").css("display","none")){
                $(".feedback-wrapper").css("display","block")
            }
         } )
         $(".feedback-top").click(()=>{
            if($(".feedback-wrapper").css("display","block")){
                $(".feedback-wrapper").css({"display":"none"})
            }
         } )
    }, [])
    return (
        <div >
            <div className="feedback-wrapper">
                <div className="feedback-top"><h4>Feedback</h4><i className="material-icons" style={{float:'right',position:'absolute',top:'8px',right:'5px',color:'white'}}>close</i></div>
                <div className="feedback-input">
                    <textarea placeholder="Give Your Feedback Here" value={feedback} onChange={(e)=>setFeedback(e.target.value)} />
                </div>
                <button  class="transparent send-button" onClick={()=>PostData()}>
                    <span class="default">Send</span>
                    <span class="success1">Sent <i className="material-icons" style={{fontSize:'26px'}}>done</i></span>
                    <div class="left"></div>
                    <div class="right"></div>
                </button>


            </div>
            
            <button id="fdbk"  >feedback</button>
        </div>
    )
}

export default Feedback
