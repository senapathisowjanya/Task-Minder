import './About.css'
import { useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { Footer } from '../Footer/Footer';

export const About = () =>{
  const [isOpen, setIsOpen] = useState(false)
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");


return (
    <div>
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
        {/* ABOUT */}
        <div>
            <div className='about_1'>
                <h1>About Task Minder</h1>
                <p>What’s behind the boards.</p>
            </div>
        </div>
        <div className='about_2'>
            <div>
            <h1>The way your team works is unique — so is Task Minder</h1>
            <p>Trello is the flexible work management tool where teams can ideate plans, collaborate on projects, organize workflows, and track progress in a visual, productive, and rewarding way. From brainstorm to planning to execution, Trello manages the big milestones and the day-to-day tasks of working together and getting things done.</p>
            <button>Download the Brand Assets (Zip)</button>
            </div>
        </div>
        <div className='about_3'>
            <h1>A brief history of Task Minder</h1>
            <div>
            <ul>
                <li>Around the summer of 2010, Fog Creek Software starts doing regular Creek Weeks, internal explorations for potential products. In January 2011, a prototype that hopes to solve some high-level planning issues is pitched. It’s called Trellis. Full time development begins soon after.</li>
                <li>After a closed beta, Trello launches at TechCrunch Disrupt in September of 2011 with apps for the web and iPhone. We narrowly avoid names like Cardvark and Planatee and go with the name Trello.</li>
                <li>In the summer of 2012, Fog Creek co-founder Joel Spolsky’s dog Taco becomes the official Trello spokes-husky. Trello reaches 500,000 members and launches the Trello Android app.</li>
            </ul>
            </div>
        </div>
        <div className='about_4'>
        <div>
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/4mi0yTvx9p26OvEyGfpfqy/8148229f21c056ac0c381a6c1742842b/logo-google.svg" alt="1" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/3iSGcJCdi0Nr69BbPjAGPb/25bea8a14c6f7a23560f83af07a30473/Visa.svg" alt="2" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/4MK9Mr07dtdg6iw0sF8bOs/2ed395aa78720d511c5893621c97f3c1/Zoom.png?w=249&fm=webp" alt="3" />
        </div>
        </div>
        <div className='about_5'>
            <div>
            <h1>Task Minder in the Press</h1>
            <p>“Trello is an online tool for managing projects and personal tasks. That may sound rather prosaic. But this increasingly popular app often inspires the sort of passion usually reserved for consumer apps like Pinterest or Instagram. It’s the kind of business software that slips into businesses through the backdoor, just because individual employees like how it works.”</p>
            </div>
        </div>
        {/* Footer */}
        <Footer/>
    </div>
)
}