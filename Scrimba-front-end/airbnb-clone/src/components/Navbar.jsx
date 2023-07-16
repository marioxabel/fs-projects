import logo from '../assets/airbnb-logo.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <img className='logo' src={logo} alt="airbnb logo" />
        </nav>
    )
}