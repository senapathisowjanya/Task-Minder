import './Footer.css';
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'

export const Footer = () =>{

    return(
        <div>
        <div className='footer'>
            <div>
                <h1>TASK MINDER</h1>
                <p>Live as if you were to die tomorrow. <br />Learn as if you were to live forever...</p>
            </div>
            <div>
                <h2>QUICK LINKS</h2>
                <p>About us</p>
                <p>COURSE</p>
                <p>Contact us</p>
                <p>Main Services</p>
                <p>Search Page</p>
            </div>
            <div>
                <h2>IMP LINKS</h2>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Cancel & Refund Policy</p>
                <p>Register</p>
                <p>Login</p>
            </div>
            <div>
                <h2>OUR ADDRESS</h2>
                <p>(+91) 9507230175</p>
                <p>Bangalore, karnataka <br /> PIN - 560001</p>
                <p>TaskMinder@gmail.com</p>
                <div className='socialmedia'>
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                    <img src={whatsapp} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            </div>
            <div className='ending'>© 2023 The NS DIGITAL || All Rights Reserved</div>
        </div>
    )
}