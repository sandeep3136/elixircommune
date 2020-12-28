import React,{useEffect} from 'react'
import $ from 'jquery'
import '@ksedline/turnjs';
import '../../../css/SingleBook.css'
import jQuery from 'jquery'
import Feedback from '../Feedback';
const Edition8 = () => {
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
            jQuery.event.add(window, "resize", resizeFrame);
    function resizeFrame(){

        $('#magazine').turn('size', '100%', '70%');
       
        }
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
            
            document.exitFullscreen();
           
          } else if (document.msExitFullscreen) {
           
            document.msExitFullscreen();
            
          } else if (document.mozCancelFullScreen) {
            
            document.mozCancelFullScreen();
          
          } else if (document.webkitExitFullscreen) {
            
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
		// jQuery.event.add(window, "resize", resizeFrame);
    // function resizeFrame(){

    //     var w = $('#main').width(); // this is div for ref

    //     if(w<=350){
    //     $('#magazine').turn('size', '800', '700');
    //     }else 
    //     $('#magazine').turn('size', '90%', '90%');
    //     }
		if (e.keyCode===37)
			$('#magazine').turn('previous');
		else if (e.keyCode===39)
			$('#magazine').turn('next');
			
  });
  


  
   },[])
    return (
      <div>
      <div id="mobile-edition-book" >
        <div id="magazine" className="mg2"  >
        <button className="exit-fs-mb-btn" id="closeFullScreen" >
                    View Fullscreen
                </button>
        <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914685/edition8/1_vbqkvs.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914686/edition8/2_q0rizg.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914689/edition8/3_qvslmr.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914691/edition8/4_sfsdqt.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914693/edition8/5_lyioor.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914696/edition8/6_myfzen.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914698/edition8/7_zjemwa.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914701/edition8/8_lnetb4.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914704/edition8/9_iipm96.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914706/edition8/10_htajzr.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914710/edition8/11_uh8vv1.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914715/edition8/12_iexmmp.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914722/edition8/13_l9rqd9.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914729/edition8/14_dhtkc0.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914744/edition8/15_vq6u68.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914750/edition8/16_xo3vug.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914756/edition8/17_lq28xv.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914762/edition8/18_x3jdqj.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914766/edition8/19_yipepw.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914773/edition8/20_ijzyvh.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914785/edition8/21_yw7lpk.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914787/edition8/22_qpubfi.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914791/edition8/23_vh31ef.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914793/edition8/24_aa73sc.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914795/edition8/25_mwurqh.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914797/edition8/26_iek9ok.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914800/edition8/27_p2a5ty.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914805/edition8/28_ukqxol.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914808/edition8/29_p26byj.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914810/edition8/30_xaur3t.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914813/edition8/31_ll38fb.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914818/edition8/32_wuaqs7.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914821/edition8/33_ub4lyq.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914823/edition8/34_skc5oy.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914825/edition8/35_eq8tw3.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914829/edition8/36_mqmuue.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914834/edition8/37_nuy7rh.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914837/edition8/38_v38w5l.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914839/edition8/39_pk3gim.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914841/edition8/40_givltg.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914843/edition8/41_ctwjjv.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914851/edition8/42_e0pprd.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914853/edition8/43_x8wk1o.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914856/edition8/44_h2gk7w.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914858/edition8/45_aha9bw.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914862/edition8/46_pyowv6.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914867/edition8/47_t3mldv.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914868/edition8/48_ftkuuk.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914871/edition8/49_tszyiy.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914873/edition8/50_tnsabz.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914876/edition8/51_grwlvz.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914882/edition8/52_b3tlif.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914884/edition8/53_sllzv6.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914885/edition8/54_rpk7z3.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914888/edition8/55_kltw1h.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914890/edition8/56_mkjwfs.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914894/edition8/57_llkh2v.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914897/edition8/58_qwkyna.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914898/edition8/59_j7lmql.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixircloud/image/upload/v1603914901/edition8/60_limeti.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
               
      </div>
      
       </div>
                <button className="full-screen-div" id="btnFullscreen" >
                    View Fullscreen
                </button>
                <i  className="material-icons" id="prevBtn">keyboard_arrow_left</i>
                <i  className="material-icons" id="nextBtn">keyboard_arrow_right</i>
                <Feedback/>

      </div>
    )
}

export default Edition8
