import React from 'react'
import {Link} from 'react-router-dom'
export default function Post() {
    return (
        <div style={{textAlign:'center'}}>
            <ul>
                <li style={{margin:"40px"}}>
                <Link to="/post/postEditions"><button className="button-primary">Post Editions</button></Link>
                </li>
                <li style={{margin:"40px"}}>
                <Link to="/post/postSlides"><button className="button-primary">Post Slides</button></Link>
                </li>
                <li style={{margin:"40px"}}>
                <Link to="/post/mobileSlides"><button className="button-primary">Post Mobile Slides</button></Link>
                </li>
            </ul>
            
        </div>
    )
}
