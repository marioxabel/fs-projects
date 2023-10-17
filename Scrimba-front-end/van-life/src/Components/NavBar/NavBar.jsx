import { Link } from 'react-router-dom'
import './NavBar.css'
import '../../../index.css'


export default function NavBar() {
    return (
        <nav >
            <div className="Navbar container">
                <Link to="/" className="NavBar__logo">#VANLIFE</Link>
                <div className="NavBar__navigation">
                    <Link to="/host">Host</Link>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </div>
            </div>
        </nav>
  )
}