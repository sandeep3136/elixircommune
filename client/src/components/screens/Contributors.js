import React,{useContext} from 'react'
import '../../css/Contributors.css'
import {Link} from 'react-router-dom'
import {UserContext} from '../../App'
import SecurePopUp from './SecurePopUp';
const Contributors = () => {
    const {state,dispatch} = useContext(UserContext)
   if(state){
    return (
        <div className="row nfc-main">
            <div className="col s12 m12 nfc-head">
                <br/>
                <h3>NOTE FOR CONTRIBUTORS</h3>
            </div>
            <div className="col s12 m12 nfc-top">
                <p><b>Elixir</b> invites content from the amateur writers of the engineering colleges across India,
                 around the clock. Elixir is ready to publish your potential in the coming editions.
                  But before that make sure your article fulfils the requirements,
                  which are explained below.
                </p>
            </div>
            <div className="col s12 m12 nfc-img">
                <img src="https://1.bp.blogspot.com/-QG0SljlVru4/Xhh6oN7DL7I/AAAAAAAAAW8/zrxHdtlIz88TwW0h-SRuNCs1TiI0ORD6ACLcBGAsYHQ/s640/2.jpg" alt="nfc"/>
            </div>
            <div className="nfc-points">
                <div className="col s12 m12 nfc-p1">
                    <p style={{fontSize:'23px',textAlign:'center'}}><b>Part - I</b></p>
                    <ul>
                        <li>Before mailing us your content make sure that you are a subscriber of Elixir. If not, then immediately subscribe to Elixir by <Link to="/subscribe"><i style={{color:'red',cursor:'pointer'}}>clicking here.</i> </Link></li>
                    </ul>
                </div>
                <div className="col s12 m12 nfc-p2">
                    <p style={{fontSize:'23px',textAlign:'center'}}><b>Part - II</b></p>
                    <ul>
                        <li>Write your article with appropriate title and sub-headings and enrich it with necessary images.</li>
                        <li>Articles comprising more than <b>1500</b> words are not encouraged.</li>
                        <li>
                        If possible make your article grammatically correct or else we will do that for you, if and only it has good content that deserves a wide range of audience and applause. And also assure that your article will fall under any of the categories mentioned below:
                       <br/>
                       <br/>
                        <ol>
                            <li>Tech Articles</li>
                            <li>Essays on Social Issues</li>
                            <li>Literature</li>
                            <li>Project Description or Abstracts</li>
                            <li>Indian Classics (Films)</li>
                            <li>Engineering Education</li>
                            <li>Gadget Reviews</li>
                            <li>Art Works</li>
                            <li>Mobile Photography</li>
                            <li>Research Papers</li>
                        </ol>
                        </li>
                    </ul>
                    <p style={{fontSize:'17px',margin:'0',textAlign:'justify',width:'100%'}}><b>NOTE:</b> If you are submitting your art works or photographs, then maintain the highest resolution possible, to avoid pixelated images. It is better to send them in a PDF file.</p>
                    <br/><br/>
                </div>
                <div className="col s12 m12  nfc-p3">
                    <p style={{fontSize:'23px',textAlign:'center'}}><b>Part - III</b></p>
                    <ul>
                        <li>
                        When you feel your article is done, mail it to <b>elixir.emagazine@gmail.com</b> by attaching the MS-Word Document or Google Doc which comprises your article along with your complete details i.e, Name, Name of the Institution, Academic year, etc. Do not submit your article in .pdf format. Articles submitted in PDF or PPT formats will be rejected without any further considerations
When we receive your mail attached with the document, we will check whether your article is fulfilling 
                        </li>
                        <li>
                        When we receive your mail attached with the document, we will check whether your article is fulfilling the criteria of Elixir or not. If we find good content enriched with necessary images, then you will receive a mail stating that your article is <b>approved</b>.
                        </li>
                        <li>
                        If you don't receive any mail for the next 72 hours, you can contact the official WhatsApp Number 6303643843.
                        </li>
                    </ul>
                    <p style={{fontSize:'17px',margin:'0',textAlign:'justify',width:'100%'}}>
                    Special Note for the students from the non-engineering streams:
Under <b>special terms and conditions,</b> articles from the students who are pursuing their bachelor degree other than engineering will be allowed to publish their articles or essays in Elixir. Mostly articles on technology, research, project abstracts are considered. Please make sure that you mention your college name along with the course name you opted. Mail your works to <b>elixir.emagazine@gmail.com</b> and wait for the reply.
                    </p>
                </div>
            </div>
            <div className="col s12 m12" style={{textAlign:'center',padding:'30px 0'}}>
            <a
          className="App-link"
          href="mailto:elixir.commune@gmail.com?subject=Content for coming editions&body=Name : 
          %0D%0A
          Name of the Institution: 
          %0D%0A
          %0D%0A
          By attaching my document/painting/photograph, I admit that :  
          %0D%0A
          %0D%0A
                ● I am contributing my content on my own will, without any hesitation or pressure. 
                %0D%0A
                ● I assure that the attached content is not published/appeared/recorded/posted in any magazine/book/newspaper/website/social media platforms. 
                %0D%0A
                ● I am solely responsible if Elixir is summoned for copyrights issue by any third party for featuring your content. 
                %0D%0A
                %0D%0A
          Best Regards, %0D%0A
          (Your Name)%0D%0A
          "
          target="_blank"
          rel="noopener noreferrer"
        ><button style={{padding:'10px 20px',cursor:'pointer',background:"teal",borderBottom: "7px solid rgb(0, 94, 94)",borderRight: "4px solid rgb(0, 94, 94)",borderLeft: "none",borderTop: "none",borderRadius: "10px",color:"white"}}>Mail Us Your Content</button></a>
            </div>
        </div>
    )
   }
   else{
    return (
        <>
        <SecurePopUp/>
        <div className="row nfc-main">
            <div className="col s12 m12 nfc-head">
                <h3 style={{textAlign:'center'}}>NOTE FOR CONTRIBUTORS</h3>
            </div>
            <div className="col s12 m12 nfc-top">
                <p><b>Elixir</b> invites content from the amateur writers of the engineering colleges across India,
                 around the clock. Elixir is ready to publish your potential in the coming editions.
                  But before that make sure your article fulfils the requirements,
                  which are explained below.
                </p>
            </div>
            <div className="col s12 m12 nfc-img">
                <img src="https://1.bp.blogspot.com/-QG0SljlVru4/Xhh6oN7DL7I/AAAAAAAAAW8/zrxHdtlIz88TwW0h-SRuNCs1TiI0ORD6ACLcBGAsYHQ/s640/2.jpg" alt="nfc"/>
            </div>
            <div className="nfc-points">
                <div className="col s12 m12 nfc-p1">
                    <p style={{fontSize:'23px',textAlign:'center'}}><b>Part - I</b></p>
                    <ul>
                        <li>Before mailing us your content make sure that you are a subscriber of Elixir. If not, then immediately subscribe to Elixir by <Link to="/subscribe"><i style={{color:'red',cursor:'pointer'}}>clicking here.</i> </Link></li>
                    </ul>
                </div>
                <div className="col s12 m12 nfc-p2">
                    <p><b style={{fontSize:'23px',textAlign:'center'}}>Part - II</b></p>
                    <ul>
                        <li>Write your article with appropriate title and sub-headings and enrich it with necessary images.</li>
                        <li>Articles comprising more than <b>1500</b> words are not encouraged.</li>
                        <li>
                        If possible make your article grammatically correct or else we will do that for you, if and only it has good content that deserves a wide range of audience and applause. And also assure that your article will fall under any of the categories mentioned below:
                       <br/>
                       <br/>
                        <ol>
                            <li>Tech Articles</li>
                            <li>Essays on Social Issues</li>
                            <li>Literature</li>
                            <li>Project Description or Abstracts</li>
                            <li>Indian Classics (Films)</li>
                            <li>Engineering Education</li>
                            <li>Gadget Reviews</li>
                            <li>Art Works</li>
                            <li>Mobile Photography</li>
                            <li>Research Papers</li>
                        </ol>
                        </li>
                    </ul>
                    <p style={{fontSize:'17px',margin:'0',textAlign:'justify',width:'100%'}}><b>NOTE:</b> If you are submitting your art works or photographs, then maintain the highest resolution possible, to avoid pixelated images. It is better to send them in a PDF file.</p>
                    <br/><br/>
                </div>
                <div className="col s12 m12  nfc-p3">
                    <p style={{fontSize:'23px',textAlign:'center'}}><b>Part - III</b></p>
                    <ul>
                        <li>
                        When you feel your article is done, mail it to <b>elixir.emagazine@gmail.com</b> by attaching the MS-Word Document or Google Doc which comprises your article along with your complete details i.e, Name, Name of the Institution, Academic year, etc. Do not submit your article in .pdf format. Articles submitted in PDF or PPT formats will be rejected without any further considerations
When we receive your mail attached with the document, we will check whether your article is fulfilling 
                        </li>
                        <li>
                        When we receive your mail attached with the document, we will check whether your article is fulfilling the criteria of Elixir or not. If we find good content enriched with necessary images, then you will receive a mail stating that your article is <b>approved</b>.
                        </li>
                        <li>
                        If you don't receive any mail for the next 72 hours, you can contact the official WhatsApp Number 6303643843.
                        </li>
                    </ul>
                    <p style={{fontSize:'17px',margin:'0',textAlign:'justify',width:'100%'}}>
                    Special Note for the students from the non-engineering streams:
Under <b>special terms and conditions,</b> articles from the students who are pursuing their bachelor degree other than engineering will be allowed to publish their articles or essays in Elixir. Mostly articles on technology, research, project abstracts are considered. Please make sure that you mention your college name along with the course name you opted. Mail your works to <b>elixir.emagazine@gmail.com</b> and wait for the reply.
                    </p>
                </div>
            </div>
            <div className="col s12 m12" style={{textAlign:'center',padding:'30px 0'}}>
            <a
          className="App-link"
          href="mailto:elixir.commune@gmail.com?subject=Content for coming editions&body=Name : 
          %0D%0A
          Name of the Institution: 
          %0D%0A
          %0D%0A
          By attaching my document/painting/photograph, I admit that :  
          %0D%0A
          %0D%0A
                ● I am contributing my content on my own will, without any hesitation or pressure. 
                %0D%0A
                ● I assure that the attached content is not published/appeared/recorded/posted in any magazine/book/newspaper/website/social media platforms. 
                %0D%0A
                ● I am solely responsible if Elixir is summoned for copyrights issue by any third party for featuring your content. 
                %0D%0A
                %0D%0A
          Best Regards, %0D%0A
          (Your Name)%0D%0A
          "
          target="_blank"
          rel="noopener noreferrer"
        ><button style={{padding:'10px 20px',cursor:'pointer',background:"teal",borderBottom: "7px solid rgb(0, 94, 94)",borderRight: "4px solid rgb(0, 94, 94)",borderLeft: "none",borderTop: "none",borderRadius: "10px",color:"white"}}>Mail Us Your Content</button></a>
            </div>
        </div>
        </>
    )
   }
    
}

export default Contributors
