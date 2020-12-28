import React,{useEffect} from 'react'
import $ from 'jquery'
import '@ksedline/turnjs';
import '../../../css/SingleBook.css'
import Feedback from '../Feedback';
import jQuery from 'jquery'
const Edition4 = () => {
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
    // jQuery.event.add(window, "resize", resizeFrame);
    // function resizeFrame(){

    //     var w = $('#main').width(); // this is div for ref

    //     if(w<=350){
    //     $('#magazine').turn('size', '800', '700');
    //     }else 
    //     $('#magazine').turn('size', '90%', '90%');
    //     }
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
      <div>
      <div id="mobile-edition-book" >
        <div id="magazine" className="mg2"  >
        <button className="exit-fs-mb-btn" id="closeFullScreen" >
                    View Fullscreen
                </button>
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
                <i  className="material-icons" id="prevBtn">keyboard_arrow_left</i>
                <i  className="material-icons" id="nextBtn">keyboard_arrow_right</i>
                <Feedback/>
           

      </div>
    )
}

export default Edition4
