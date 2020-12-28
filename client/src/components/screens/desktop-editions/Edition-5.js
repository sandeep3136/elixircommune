import React,{useEffect,useCallback} from 'react'
import '../../../css/Flipbook.css'
import $ from 'jquery'
import jQuery from 'jquery'
import '@ksedline/turnjs';

import Feedback from '../Feedback';
// import { FullScreen, useFullScreenHandle } from "react-full-screen";


const Editionb5 = () => {
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
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913558/edition5/1_cx9vmj.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913560/edition5/2_yiqyr8.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913562/edition5/3_qblmpq.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913564/edition5/4_h3xg5k.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913567/edition5/5_ejdlxr.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913569/edition5/6_ajh8ce.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913572/edition5/7_zlvtks.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913575/edition5/8_khs7yu.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913576/edition5/9_nurenk.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913579/edition5/10_xubcct.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913583/edition5/11_vn2jng.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913587/edition5/12_u8gfua.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913590/edition5/13_l7p8ls.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913592/edition5/14_uf6rdp.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913594/edition5/15_nbazwz.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913596/edition5/16_pztzca.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913599/edition5/17_twvoxr.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913604/edition5/18_afc0id.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913606/edition5/19_b46a5m.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913618/edition5/20_zdld5v.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913622/edition5/21_oreilb.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913628/edition5/22_e9xkaf.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913637/edition5/23_anna2q.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913642/edition5/24_wl4w7n.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913646/edition5/25_w360wn.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913650/edition5/26_pwgrkg.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913654/edition5/27_i0i74b.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913659/edition5/28_qhk6jv.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913661/edition5/29_g5mhyj.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913665/edition5/30_smxden.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913681/edition5/31_rltam4.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913685/edition5/32_ykdyvr.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913719/edition5/33_kvohfm.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913722/edition5/34_xhipjy.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913728/edition5/35_xuovsx.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913733/edition5/36_ucyfde.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913738/edition5/37_dxlcsr.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913741/edition5/38_kwg68x.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913746/edition5/39_ga1nt5.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913750/edition5/40_a2x0sy.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913753/edition5/41_ll4oqi.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913759/edition5/42_au99un.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913766/edition5/43_d0iykf.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913770/edition5/44_xngnbi.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913773/edition5/45_lcepej.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913785/edition5/46_ul3tzz.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913794/edition5/47_yiolvg.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913798/edition5/48_jltzdz.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913803/edition5/49_cdj920.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913808/edition5/50_kbqgs4.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913835/edition5/51_jttoar.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913838/edition5/52_zq20me.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913840/edition5/53_a2hf5o.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913843/edition5/54_cjaac3.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913846/edition5/55_vnhvlb.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913848/edition5/56_iudf7r.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913851/edition5/57_m01rbg.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913853/edition5/58_resvmz.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913856/edition5/59_fy9lko.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913858/edition5/60_vmz8xc.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913861/edition5/61_h4pf6j.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913863/edition5/62_ksv3hq.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913867/edition5/63_nbjp1y.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913869/edition5/64_ehjssr.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913871/edition5/65_znf0kg.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913873/edition5/66_rv7yys.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603913876/edition5/67_ltbopf.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
              </div>
    
            
        
           
                
                </div>
                <button className="full-screen-div" id="btnFullscreen" >
                    View Fullscreen
                </button>
                <Feedback/>
    </div>
    )
}

export default Editionb5
