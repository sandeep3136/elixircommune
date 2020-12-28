import React,{useEffect,useCallback} from 'react'
import '../../../css/Flipbook.css'
import $ from 'jquery'
import jQuery from 'jquery'
import '@ksedline/turnjs';

import Feedback from '../Feedback';
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
const Editionb4 = () => {
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
      (function () {
        var viewFullScreen = document.getElementById("btnFullscreen");
        if (viewFullScreen) {
           viewFullScreen.addEventListener("click", function () {
               var docElm = document.getElementById("mg-fullscreen");
                     jQuery.event.add(window, "resize", resizeFrame);
            function resizeFrame(){
                $('#magazine.mg1').turn('size','70%', '95%');
                }
               $("#closeFullScreen").css('display','block');
               if (docElm.requestFullscreen) {
                   docElm.requestFullscreen();
               }
               else if (docElm.msRequestFullscreen) {
                   docElm.msRequestFullscreen();
               }
               else if (docElm.mozRequestFullScreen) {
                   docElm.mozRequestFullScreen();
               }
               else if (docElm.webkitRequestFullScreen) {
                   docElm.webkitRequestFullScreen();
               }
           }, false);
       }
    
      var cancelFullScreen = document.getElementById("closeFullScreen");
      if (cancelFullScreen) {
         cancelFullScreen.addEventListener("click", function () {
          $("#closeFullScreen").css('display','none');
          jQuery.event.add(window, "resize", resizeFrame);
          
          function resizeFrame(){
              $('#magazine.mg1').turn('size','760', '560');
              }
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
         }, false);
      }   
    })();
    
    
    
    
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
        <i  className="material-icons" id="closeFullScreen" style={{cursor:"pointer",position:'absolute',right:'10px',top:'10px',fontSize:'3.5rem',display:'none',color:'white'}}>close</i>
                <i  className="material-icons" id="prevBtn" style={{cursor:"pointer",position:'absolute',left:'0',top:'30%',transform:'translate(0,40%)',fontSize:'5rem',color:'#0c509d'}}>keyboard_arrow_left</i>
                <i  className="material-icons" id="nextBtn"  style={{cursor:"pointer",position:'absolute',right:'0',top:'30%',transform:'translate(0,40%)',fontSize:'5rem',color:'#0c509d'}}>keyboard_arrow_right</i>
                <div id="magazine" className="mg1 shadow" >
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913269/edition4/0001_nwhat3.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913270/edition4/0002_sv405h.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913272/edition4/0003_sjonyg.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913273/edition4/0004_oobdli.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913276/edition4/0005_xwom3m.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913280/edition4/0006_hmrewq.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913282/edition4/0007_y7wbhn.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913284/edition4/0008_irdnic.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913286/edition4/0009_lhtoba.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913288/edition4/0010_fo8pxs.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913292/edition4/0011_alwprj.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913294/edition4/0012_qprrlv.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913297/edition4/0013_sebp3h.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913299/edition4/0014_u8ntzc.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913301/edition4/0015_cfcqep.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913304/edition4/0016_y06gbx.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913308/edition4/0017_t6jdxw.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913310/edition4/0018_hhcmpi.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913313/edition4/0019_baseqm.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913316/edition4/0020_e9mhqe.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913317/edition4/0021_yaywiw.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913321/edition4/0022_uxahjv.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913324/edition4/0023_cebur7.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913328/edition4/0024_tdot5d.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913329/edition4/0025_jekuag.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913332/edition4/0026_lhmgrv.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913340/edition4/0027_s0spy6.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913348/edition4/0028_cvuoiz.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913352/edition4/0029_pq75uc.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913369/edition4/0030_kfka0t.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913376/edition4/0031_a9gasi.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913382/edition4/0032_wn2l50.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913395/edition4/0033_a8aszw.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913427/edition4/0034_tkxwmp.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913454/edition4/0035_exmdhy.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913459/edition4/0036_agqmq3.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913469/edition4/0037_w6xjpq.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
            
                </div>
    
            
        
            
                
                </div>
                <button className="full-screen-div" id="btnFullscreen" >
                    View Fullscreen
                </button>
                <Feedback/>
    </div>
    )
}

export default Editionb4
