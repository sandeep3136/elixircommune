import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
// import Loading from './Loading';
import {UserContext} from '../../App'
import '../../css/Slider.css'
import { Slide } from 'react-slideshow-image';

// const slideImages = [
//   'http://res.cloudinary.com/elixir2019/image/upload/v1603620958/tgoczdtmzanqy9ltdmre.jpg',
//   'http://res.cloudinary.com/elixir2019/image/upload/v1603621959/v0xah0f1doemmppllgsk.jpg',
//   'http://res.cloudinary.com/elixir2019/image/upload/v1603620958/tgoczdtmzanqy9ltdmre.jpg'
// ];
  const Slideshow = () => {
    // const [data,setData] = useState([])
    const properties = {
      indicators: true,
    }
    const {state,dispatch} = useContext(UserContext)
    // useEffect(() => {
    //   fetch('/slides',{
    //     // headers:{
    //     //   "Authorization":"Bearer "+localStorage.getItem("jwt")
    //     // }
    //   }).then(res=>res.json())
    //   .then(result=>{
    //     console.log(result)
    //      setData(result.posts)
    //   })
    // },[])
    
    
//     useEffect(()=>{
        
// (function($) {
//   "use strict";
//   $.fn.sliderResponsive = function(settings) {
    
//     var set = $.extend( 
//       {
//         slidePause: 5000,
//         fadeSpeed: 800,
//         autoPlay: "on",
//         showArrows: "off", 
//         hideDots: "off", 
//         hoverZoom: "on",
//         titleBarTop: "off"
//       },
//       settings
//     ); 
    
//     var $slider = $(this);
//     var size = $slider.find("> div").length; //number of slides
//     var position = 0; // current position of carousal
//     var sliderIntervalID; // used to clear autoplay
      
//     // Add a Dot for each slide
//     $slider.append("<ul></ul>");
//     $slider.find("> div").each(function(){
//       $slider.find("> ul").append('<li></li>');
//     });
      
//     // Put .show on the first Slide
//     $slider.find("div:first-of-type").addClass("show");
      
//     // Put .showLi on the first dot
//     $slider.find("li:first-of-type").addClass("showli")

//      //fadeout all items except .show
//     $slider.find("> div").not(".show").fadeOut();
    
//     // If Autoplay is set to 'on' than start it
//     if (set.autoPlay === "on") {
//         startSlider(); 
//     } 
    
//     // If showarrows is set to 'on' then don't hide them
//     if (set.showArrows === "on") {
//         $slider.addClass('showArrows'); 
//     }
    
//     // If hideDots is set to 'on' then hide them
//     if (set.hideDots === "on") {
//         $slider.addClass('hideDots'); 
//     }
    
//     // If hoverZoom is set to 'off' then stop it
//     if (set.hoverZoom === "off") {
//         $slider.addClass('hoverZoomOff'); 
//     }
    
//     // If titleBarTop is set to 'on' then move it up
//     if (set.titleBarTop === "on") {
//         $slider.addClass('titleBarTop'); 
//     }

//     // function to start auto play
//     function startSlider() {
//       sliderIntervalID = setInterval(function() {
//         nextSlide();
//       }, set.slidePause);
//     }
    
//     // on mouseover stop the autoplay
//     $slider.mouseover(function() {
//       if (set.autoPlay === "on") {
//         clearInterval(sliderIntervalID);
//       }
//     });
      
//     // on mouseout starts the autoplay
//     $slider.mouseout(function() {
//       if (set.autoPlay === "on") {
//         startSlider();
//       }
//     });

//     //on right arrow click
//     $slider.find("> .right").click(nextSlide)

//     //on left arrow click
//     $slider.find("> .left").click(prevSlide);
      
//     // Go to next slide
//     function nextSlide() {
//       position = $slider.find(".show").index() + 1;
//       if (position > size - 1) position = 0;
//       changeCarousel(position);
//     }
    
//     // Go to previous slide
//     function prevSlide() {
//       position = $slider.find(".show").index() - 1;
//       if (position < 0) position = size - 1;
//       changeCarousel(position);
//     }

//     //when user clicks slider button
//     $slider.find(" > ul > li").click(function() {
//       position = $(this).index();
//       changeCarousel($(this).index());
//     });

//     //this changes the image and button selection
//     function changeCarousel() {
//       $slider.find(".show").removeClass("show").fadeOut();
//       $slider
//         .find("> div")
//         .eq(position)
//         .fadeIn(set.fadeSpeed)
//         .addClass("show");
//       // The Dots
//       $slider.find("> ul").find(".showli").removeClass("showli");
//       $slider.find("> ul > li").eq(position).addClass("showli");
//     }

//     return $slider;
//   };
// })(jQuery);


 
// //////////////////////////////////////////////
// // Activate each slider - change options
// //////////////////////////////////////////////
// $(document).ready(function() {
  
//   $("#slider1").sliderResponsive({
//   // Using default everything
//     // slidePause: 5000,
//     // fadeSpeed: 800,
//     // autoPlay: "on",
//     // showArrows: "off", 
//     // hideDots: "off", 
//     // hoverZoom: "on", 
//     // titleBarTop: "off"
//   });
  
  
// }); 



//     },[])
    return (
      
      // <div className="box effect5">
      //   <Slide easing="ease" {...properties}>
      //   {data.map((each, index) => (
      //     <div key={index} className="each-slide">
      //       <div  style={{'backgroundImage': `url(${each.dkSlideImage})`,position:'relative'}}>
      //       <button  className="btn" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button>
      //       </div>
      //     </div>
      //     )) }
      //   </Slide>
    <div className="effect5">
        <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947714/CP_-_WP_poster_x1pffc.jpg"/>
            </div>
            <Link to={state?"/editions/7-edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
          <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947716/CP_WTB_lra51v.jpg"/>
            </div>
            <Link to={state?"/editions/8-edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
          <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947723/et4wp_hfvw9j.jpg"/>
            </div>
            <Link to={state?"/editions/8-edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
            <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947723/CS_WTB_s1hsc7.jpg"/>
            </div>
            <Link to={state?"/editions/8-edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
          <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947727/Medtech_Wtsp_wybc3d.jpg"/>
            </div>
            <Link to={state?"/editions/7-edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
          <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947731/SS_WTB_ydd5nh.jpg"/>
            </div>
            <Link to={state?"/editions/8-edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
        </Slide>
      </div>
       
    )
  }
  
  export default Slideshow;