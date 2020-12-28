import React,{useEffect} from 'react'
import $ from 'jquery'
import '@ksedline/turnjs';
import '../../css/SingleBook.css'
import Feedback from './Feedback';
const SingleBook = () => {

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
      
      // document.getElementById('btnFullscreen').addEventListener('click', function() {
      //     $(".toolbar").css("display",'none')
      //     $("#magazine").css({"scale":"1.1"})
      //   toggleFullscreen();
      // });
      
    //   document.getElementById('mg-fullscreen').addEventListener('click', function() {
    //     toggleFullscreen(this);
    //   });

    document.getElementById('btnFullscreen').addEventListener('click', function() {
      $("#btnFullscreen").css("display","none")
      toggleFullscreen(document.getElementById("mobile-edition-book"));
    });


},[])
   useEffect(()=>{
    $(window).ready(function() {
		$('#magazine').turn({
							display: 'single',
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
      <div id="mobile-edition-book" >
        <div id="magazine" className="mg2"  >
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
    )
}

export default SingleBook
