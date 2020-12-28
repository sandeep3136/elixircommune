import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../../css/Editions.css' 
export default function Editions() {
  const [data,setData] = useState([])
  useEffect(() => {
    fetch('/alleditions',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result.posts)
       setData(result.posts)
    })
    
  }, [])
    return (
      <div className="editions-wrapper">
        {/* {
          data.map(item=>{
            return(
              <div class="mg-wrap mg-wrap--1">
              <div class="mg-container mg-container--1">
              <div className="libro"> 
                    <img alt="book-img" src={item.photo} alt="" />
                  </div>
            <h6>{item.edition}</h6>
              </div>
              </div>
            )
            })
        } */}
        {/* {data.map((each, index) => (
        <div key={each} className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/flipbook"><img alt="book-img" className="book-card__img" src={each.photo} /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
          <div className="book-card__title">
           {each.edition}
          </div>
      </div>
             
            
        ))} */}
        <div id="mb-editions">
          
        <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/9edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603942015/oladg2zckrgw52dxafsw.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
        <Link to="/editions/9edition"><div className="book-card__title">
           Ninth Edition
          </div></Link>
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
            <Link to="/editions/8edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603941952/h6obbrp0cy4iprkmftuf.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
        <Link to="/editions/8edition"><div className="book-card__title">
           Eighth Edition
          </div></Link>
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/7edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603941878/fzgmhv6nguazcy6oh5v4.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
         <Link to="/editions/7edition"><div className="book-card__title">
           Seventh Edition
          </div></Link> 
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/6edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603941828/edeaoasppnkljqlbghht.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
          <Link to="/editions/6edition"><div className="book-card__title">
           Sixth Edition
          </div></Link>
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/5edition"><img alt="book-img" className="book-card__img" src="https://res.cloudinary.com/elixircloud/image/upload/v1603941780/lvzbdmlhd91xmekgmadw.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
          <Link to="/editions/5edition"><div className="book-card__title">
           Fifth Edition
          </div></Link>
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/4edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603941726/gxahfou9zk5bq8zt7fsz.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
        <Link to="/editions/4edition"><div className="book-card__title">
           Fourth Edition
          </div></Link>
      </div>
      </div>
      <div id="dk-editions">
        <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/9-edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603942015/oladg2zckrgw52dxafsw.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
        <Link to="/editions/9-edition"><div className="book-card__title">
           Ninth Edition
          </div></Link>
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
            <Link to="/editions/8-edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603941952/h6obbrp0cy4iprkmftuf.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
        <Link to="/editions/8-edition"><div className="book-card__title">
           Eighth Edition
          </div></Link>
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/7-edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603941878/fzgmhv6nguazcy6oh5v4.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
         <Link to="/editions/7-edition"><div className="book-card__title">
           Seventh Edition
          </div></Link> 
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/6-edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603941828/edeaoasppnkljqlbghht.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
          <Link to="/editions/6-edition"><div className="book-card__title">
           Sixth Edition
          </div></Link>
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/5-edition"><img alt="book-img" className="book-card__img" src="https://res.cloudinary.com/elixircloud/image/upload/v1603941780/lvzbdmlhd91xmekgmadw.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
          <Link to="/editions/5-edition"><div className="book-card__title">
           Fifth Edition
          </div></Link>
      </div>
      <div  className="book-card">
        <div className="book-card__cover effect7">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <Link to="/editions/4-edition"><img alt="book-img" className="book-card__img" src="http://res.cloudinary.com/elixircloud/image/upload/v1603941726/gxahfou9zk5bq8zt7fsz.jpg" /></Link>
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        
        <Link to="/editions/4-edition"><div className="book-card__title">
           Fourth Edition
          </div></Link>
      </div>
      </div>
        </div>
       
      )       
  
    
}
