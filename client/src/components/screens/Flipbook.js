import React,{useEffect,useCallback} from 'react'
import '../../css/Flipbook.css'
import $ from 'jquery'

import '@ksedline/turnjs';

import Feedback from './Feedback';
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
const Flipbook = () => {
    // const handle = useFullScreenHandle();
    useEffect(()=>{
        $("#prevBtn").click(function() {
            $("#magazine").turn("previous");
    });
    
    $("#nextBtn").click(function() {
            $("#magazine").turn("next");
    });
    },[])
    useEffect(()=>{
        function toggleFullscreen(elem) {
            elem = elem || document.documentElement;
            if (!document.fullscreenElement && !document.mozFullScreenElement &&
              !document.webkitFullscreenElement && !document.msFullscreenElement) {
              if (elem.requestFullscreen) {
                elem.requestFullscreen();
              } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
              } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
              } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            } else {
              if (document.exitFullscreen) {
                $("#btnFullscreen").css("display","block")
                document.exitFullscreen();
               
              } else if (document.msExitFullscreen) {
                $("#btnFullscreen").css("display","block")
                document.msExitFullscreen();
                
              } else if (document.mozCancelFullScreen) {
                $("#btnFullscreen").css("display","block")
                document.mozCancelFullScreen();
                
              } else if (document.webkitExitFullscreen) {
                $("#btnFullscreen").css("display","block")
                document.webkitExitFullscreen();
          
              }
            }
          }

          
           document.getElementById('btnFullscreen').addEventListener('click',()=> {
            
            $("#btnFullscreen").css("display","none")
            if($("#magazine.mg1").css({"height":'680px',width:'1000px'})){
            toggleFullscreen(document.getElementById("mg-fullscreen"));}
          },[$("#magazine.mg1").css({"height":'680px',width:'1000px'})]);
          
        //   document.getElementById('mg-fullscreen').addEventListener('click', function() {
        //     toggleFullscreen(this);
        //   });
    
    
    
    
    },[])
   useEffect(()=>{

    
    $(window).ready(function() {
		$('#magazine').turn({
							display: 'double',
							acceleration: true,
							gradients: !$.isTouch,
              elevation:50,
							when: {
								turned: function(e, page) {
									/*console.log('Current view: ', $(this).turn('view'));*/
								}
							}
						});
	});
	
	
	$(window).bind('keydown', function(e){
		
		if (e.keyCode===37)
			$('#magazine').turn('previous');
		else if (e.keyCode===39)
			$('#magazine').turn('next');
			
    });
   
   },[])
    return (
        <div>
        <div id="mg-fullscreen">
        
                <i  className="material-icons" id="prevBtn" style={{cursor:"pointer",position:'absolute',left:'0',top:'30%',transform:'translate(0,40%)',fontSize:'5rem',color:'#0c509d'}}>keyboard_arrow_left</i>
                <i  className="material-icons" id="nextBtn"  style={{cursor:"pointer",position:'absolute',right:'0',top:'30%',transform:'translate(0,40%)',fontSize:'5rem',color:'#0c509d'}}>keyboard_arrow_right</i>
                <div id="magazine" className="mg1" >
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url()",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                </div>
    
            <Feedback/>
        
            <button className="full-screen-div" id="btnFullscreen" >
                    View Fullscreen
                </button>
                
                </div>

    </div>
    )
}

export default Flipbook
