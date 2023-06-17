import './Home.css';
// import user from '../../assets/user.png'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { Footer } from '../Footer/Footer';


export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  const navigate = useNavigate();


  return (
    <div>
      <div className='back'>
        {/* navbar */}
        <nav className='nav_bar'>
          <div>
            {isSmallerThan800 ? <h2 onClick={() => { setIsOpen(!isOpen) }}>|||</h2> : null}
            <h1><p>TASK</p>MINDER</h1>
          </div>
          <div>
            {!isSmallerThan800 ?
              <div>
                <p><a href="#Home">Home</a></p>
                <p><a href="#About">About</a></p>
                <p><a href="#">Pricing</a></p>
                <p><a href="/Dashboard">Dashboard</a></p>
                <p><a href="#">Login</a></p>
              </div>
              : null}
            <a href="/Dashboard"><img src={'https://cdn-icons-png.flaticon.com/128/747/747376.png'} alt='user' /></a>
          </div>
        </nav>
        {/* sideBar */}
        {isOpen && isSmallerThan800 ?
          <div style={{ width: isSmallerThan500 ? '70%' : '40%' }} className='home_body_sidebar'>
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
          : null}
        {/* body */}
        <div className='home_body'>
          <div id='Home' className='home_body_1'>
          <h1>Task Minder brings all your  <br />tasks, teammates, and tools together</h1>
          <p>Trello brings all your tasks, teammates, and tools together</p>
          <button>Sign up - it’s free!</button>
          </div>
          <div id='About' className='home_body_2'>
            <div>
              <iframe width={'100%'} height={'100%'} src="https://www.youtube-nocookie.com/embed/shW9i6k8cB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
              <h1>What Is TASK MINDER ?</h1>
              <p>The NS Digital is a digitally organized E-learning platform that focuses on the SKILL DEVELOPMENT of it's students by giving courses in a variety of disciplines that may assist anyone solidify their talents.</p>
              <button>Enroll Today →</button>
            </div>
          </div>
          <div className='home_body_3'>
            <div>
              <h1>1.2 m <b>+</b></h1>
              <p>Current Users</p>
            </div>
            <div>
              <h1>250 k<b>+</b></h1>
              <p>Active Users</p>
            </div>
          </div>
          <div className='home_body_4'>
            <h1>Workflows </h1>
            <h2></h2>
            <div>
              <div>
                <h3>Project Management</h3>
                <p>"Keep task in order, deadlines on track, and team members aligned with Task Minder"</p>
              </div>
              <div>
                <h3>Meetings</h3>
                <p>"Empower your team meetins to be more productive, empowering, and dare we say-fun"</p>
              </div>
              <div>
                <h3>Resource Hub</h3>
                <p>"Save time with a well-designed hub that helps teams find information easily and quickly"</p>
              </div>
            </div>
          </div>
          <div className='join_now_btn'>
            <button onClick={() => navigate('/Dashboard')}>JOIN NOW</button>
          </div>


        </div>

        {/* footer */}
      </div>
      <div className='home_body_5'>
          <div>
            <div>
              <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6mSpThW5HS89/f5683a167ad3f74bed4dc7592ae5a002/TrelloBoard_Timeline_2x.png?w=1212&fm=webp" alt="" />
            </div>
            <div>
              <h3>HIT DEADLINES EVERY TIME</h3>
              <p>From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="https://images.ctfassets.net/rz1oowkt5gyp/7sxChS4x6XAcUgDpp4VAZk/25377d162e964f4243e329c447bfd7dc/TrelloBoard_Calendar_2x.png?w=1212&fm=webp" alt="" />
            </div>
            <div>
              <h3>STAY ON TOP OF TASKS</h3>
              <p>Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</p>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}