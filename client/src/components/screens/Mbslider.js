import React,{useContext} from 'react';
import 'react-slideshow-image/dist/styles.css'
import {Link} from 'react-router-dom'
import {UserContext} from '../../App'
import '../../css/Mbslider.css'
import { Slide } from 'react-slideshow-image';
const Mbslider = () => {

  const slideImages = [
    'http://res.cloudinary.com/elixir2019/image/upload/v1603794300/drcj9rn71a5vlnjz9ei9.jpg',
    'http://res.cloudinary.com/elixir2019/image/upload/v1603771832/z9hobxv15g7ngrks3ejo.jpg',
    'http://res.cloudinary.com/elixir2019/image/upload/v1603771832/z9hobxv15g7ngrks3ejo.jpg'
  ];
    // const [data,setData] = useState([])

    // useEffect(() => {
    //   fetch('/mbslides',{
    //     // headers:{
    //     //   "Authorization":"Bearer "+localStorage.getItem("jwt")
    //     // }
    //   }).then(res=>res.json())
    //   .then(result=>{
    //     console.log(result)
    //      setData(result.posts)
    //   })
    // },[])
    const properties = {
      indicators: true,
    }
    const {state,dispatch} = useContext(UserContext)
    return (
          /* {data.map((each, index) => (
            <div key={index} style={{width: "100%",height:"100%",objectFit:"contain"}}>
              <img style={{ width: "100%" ,height:"100%"}} src={each.dkSlideImage} />
          <button className="btn" style={{position:"absolute",zIndex:"20",right:'20px',bottom:'20px'}}>Read More</button>
            </div>
          )) } */
          <div className="effect5">
        <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947632/CP_IG_q1xvyi.jpg" />
            </div>
            <Link to={state?"/editions/7edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
          <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947667/mb1_jarkgf.jpg"/>
            </div>
            <Link to={state?"/editions/8edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
            <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947669/mb3_mljot7.jpg"/>
            </div>
            <Link to={state?"/editions/7edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
            <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947673/mb2_xasqsh.jpg" />
            </div>
            <Link to={state?"/editions/8edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
          <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947673/CS_IG_ecknog.jpg"/>
            </div>
            <Link to={state?"/editions/8edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
          <div className="each-slide">
            <div>
              <img alt="slide-images" src="https://res.cloudinary.com/elixircloud/image/upload/v1603947676/SS_IG_ck6kcc.jpg"/>
            </div>
            <Link to={state?"/editions/8edition":"/signin"}><button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button></Link>
          </div>
        </Slide>
      </div>
       
    )
}

export default Mbslider
