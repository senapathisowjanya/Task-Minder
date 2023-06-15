import './Home.css';
// import user from '../../assets/user.png'
import { useNavigate } from 'react-router-dom';
import {useMediaQuery} from '@chakra-ui/react';
import { useState } from 'react';


export const Home = () =>{
  const [isOpen,setIsOpen] = useState(false)
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  const navigate = useNavigate();


return (
    <div className='back'>
        {/* navbar */}
        <nav className='nav_bar'>
            <div>
              {isSmallerThan800?<h2 onClick={()=>{setIsOpen(!isOpen)}}>|||</h2>:null}            
            <h1><p>TASK</p>MINDER</h1>
            </div>
            <div>
              {!isSmallerThan800?
              <div>
                <p><a href="#Home">Home</a></p>
                <p><a href="#About">About</a></p>
                <p><a href="/Dashboard">Dashboard</a></p>
                <p><a href="#">Login</a></p>
              </div>
              : null}
                <a href="/Dashboard"><img src={'https://cdn-icons-png.flaticon.com/128/747/747376.png'} alt='user'/></a>
            </div>            
        </nav>
      {/* sideBar */}
      {isOpen&&isSmallerThan800?
            <div style={{width:isSmallerThan500?'70%':'40%'}} className='home_body_sidebar'>
            <div><p><a href="#Home">Home</a></p></div>
            <div><p><a href="#About">About</a></p></div>
            <div><p><a href="/Dashboard">Dashboard</a></p></div>
            <div><p><a href="#">Login</a></p></div>
            <span>
              <p><a href="#">HELP</a></p>
              <p>|</p>
              <p><a href="#">MORE</a></p>
            </span>
          </div>
        :null}
        {/* body */}
        <div className='home_body'>
            <div id='Home' className='home_body_1'>

            </div>
            <div id='About' className='home_body_2'>
                <div>
                <iframe width={'100%'} height={'100%'} src="https://www.youtube-nocookie.com/embed/shW9i6k8cB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <h1>What Is NS Digital ?</h1>
                    <p>The NS Digital is a digitally organized E-learning platform that focuses on the SKILL DEVELOPMENT of it's students by giving courses in a variety of disciplines that may assist anyone solidify their talents.</p>
                    <button>Enroll Today →</button>
                </div>
            </div>
            <div className='home_body_3'>
                <div>
                    <h1>1,000 <b>+</b></h1>
                    <p>Current Partners</p>
                </div>
                <div>
                    <h1>2.5 LC <b>+</b></h1>
                    <p>COMMUNITY EARNING</p>
                </div>
            </div>
            <div className='home_body_4'>
                <h1>REVIEWS</h1>
                <h2></h2>
                <div>
                    <div>
                        <p>"Guys I have started journey in NS Digital and i have achieved so much success in Life"</p>
                    </div>
                    <div>
                    <p>"Guys I have started journey in NS Digital and i have achieved so much success in Life"</p>
                    </div>
                    <div>
                    <p>"Guys I have started journey in NS Digital and i have achieved so much success in Life"</p>
                    </div>
                </div>
            </div>

<div className='join_now_btn'>
  <button onClick={()=>navigate('/Dashboard')}>JOIN NOW</button>
</div>

  </div>
        {/* footer */}
        {/* <Footer/> */}
    </div>
)
}