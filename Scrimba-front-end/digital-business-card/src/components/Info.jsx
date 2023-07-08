import profilePic from '../assets/cosmic.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Info.css'

export default function About() {
    return (
        <div className="container">
            <img src={profilePic} alt=""/>
            <h1>Mario Abel</h1>
            <p className="frontend-text">
                Frontend Developer
            </p>
            <a className='small' href='https://marioabel.xyz' target="_blank" rel="noreferrer noopener">marioabel.xyz</a>
            <div className="links inner-container">
                <a className='email' href="mailto:robots@marioabel.xyz">
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
                <a className='linkedin' href='https://www.linkedin.com/in/marioabel' target="_blank" rel="noreferrer noopener"> 
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
            </div>
        </div>
    )
}
