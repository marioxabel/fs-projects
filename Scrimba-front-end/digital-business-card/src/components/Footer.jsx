import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'

export default function Footer() {
    return (
        <div className="icons container">
            <a href="#">
                    <FontAwesomeIcon icon={faSquareTwitter} /> 
            </a>
            <a href="#">
                    <FontAwesomeIcon icon={faSquareFacebook} /> 
            </a>
            <a href="#">
                    <FontAwesomeIcon icon={faSquareInstagram} /> 
            </a>
            <a href="#">
                    <FontAwesomeIcon icon={faSquareGithub} /> 
            </a>
            
        </div>
    )
}