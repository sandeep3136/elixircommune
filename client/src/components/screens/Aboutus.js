import React,{useContext} from 'react'
import '../../css/Aboutus.css'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
import SecurePopUp from './SecurePopUp'

const Aboutus = () => {
    const {state,dispatch} = useContext(UserContext)
   
    if(state){
    return (
        <div className="team-wrapper">
            <div dir="ltr" style={{textAlign: 'left'}} trbidi="on">
        <div className="about-top">
            <div className="about-top-img">
            <img alt="about-us-img" src="https://res.cloudinary.com/elixircloud/image/upload/v1603946380/newgif_rkw6qj.gif"  />
            </div>
          <div  className="about-top-text">
            <p><b>Elixir</b>&nbsp;was launched on March 11th, 2019 as a bimonthly eMagazine. Initially, the motto of elixir is to educate less facilitated students who lack knowledge in technical advancements that are rapidly taking place in the pace of globalisation. Later, Elixir has modified its vision by determining to bring out every writer, every geek and every enthusiast from his/her campus. Presently, Elixir comprises different sections like <b>Start-up Stories,</b> which is an interview with renowned Start-ups, <b>Career Post </b>authored by professionals<b>,</b>&nbsp;<b>Entrepreneur Stories</b>,&nbsp;<b>Corner of Communication Skills,&nbsp;</b><b>Tech Articles, Literature, Articles on Social Issues, Photography</b>&nbsp;and <b>Art Corner</b>. Today, Elixir stands as one of the best platforms for an engineering student to explore his/her writing skills. Moreover Elixir is first of it’s kind i.e. a non-commercial student eMagazine. Come, let's unleash the dreams beneath. If you want to contribute your article in the coming editions, <Link to="/nfc">click here.</Link></p></div>

        </div>
        <div style={{textAlign: 'left'}}>
          <div dir="ltr" id="docs-internal-guid-a3c34056-7fff-5806-216a-bfd38c0e82b7">
            <br /></div>
        </div>
        <div style={{textAlign: 'center'}}>
          <span style={{fontSize: 'large'}}><span face="&quot;trebuchet ms&quot; , sans-serif" style={{color: 'blue'}}><b>| PERCEIVE&nbsp;| ARTICULATE | TRANSCEND|</b></span></span></div>
        <br />
      </div>

            <h2>TEAM ELIXIR</h2>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
        </div>
    )}
    else{
        return(
            <>
            
            <SecurePopUp/>
            
            <div className="team-wrapper">
            <div dir="ltr" style={{textAlign: 'left'}} trbidi="on">
        <div className="row">
            <div className="col s12 m4">
            <img alt="about-us-img" src="https://res.cloudinary.com/elixircloud/image/upload/v1603946380/newgif_rkw6qj.gif" style={{height:'240px'}} />
            </div>
          <div  className="col s12 m8" style={{textAlign: 'left',fontSize:'16px'}}>
            <b>Elixir</b>&nbsp;was launched on March 11th, 2019 as a bimonthly eMagazine. Initially, the motto of elixir is to educate less facilitated students who lack knowledge in technical advancements that are rapidly taking place in the pace of globalisation. Later, Elixir has modified its vision by determining to bring out every writer, every geek and every enthusiast from his/her campus. Presently, Elixir comprises different sections like <b>Start-up Stories,</b> which is an interview with renowned Start-ups, <b>Career Post </b>authored by professionals<b>,</b>&nbsp;<b>Entrepreneur Stories</b>,&nbsp;<b>Corner of Communication Skills,&nbsp;</b><b>Tech Articles, Literature, Articles on Social Issues, Photography</b>&nbsp;and <b>Art Corner</b>. Today, Elixir stands as one of the best platforms for an engineering student to explore his/her writing skills. Moreover Elixir is first of it’s kind i.e. a non-commercial student eMagazine. Come, let's unleash the dreams beneath. If you want to contribute your article in the coming editions, <Link to="/nfc">click here.</Link></div>
        </div>
        <div style={{textAlign: 'left'}}>
          <div dir="ltr" id="docs-internal-guid-a3c34056-7fff-5806-216a-bfd38c0e82b7">
            <br /></div>
        </div>
        <div style={{textAlign: 'center'}}>
          <span style={{fontSize: 'large'}}><span face="&quot;trebuchet ms&quot; , sans-serif" style={{color: 'blue'}}><b>| PERCEIVE&nbsp;| ARTICULATE | TRANSCEND|</b></span></span></div>
        <br />
      </div>

            <h2>TEAM ELIXIR</h2>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
            <div className="profile-container">
                <div className="profile z-depth-5">
                    <img alt="about-us-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
                </div>
                <div className="profile-text">
                    <p>Name</p>
                    <p>Profession</p>
                </div>
            </div>
        </div>
            </>
        )
    }
}

export default Aboutus
