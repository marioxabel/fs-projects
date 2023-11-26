import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import '../../../index.css'


export default function NavBar() {
    const style = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <nav >
            <div className="Navbar container">
                <Link to="/" className="NavBar__logo">#VANLIFE</Link>
                <div className="NavBar__navigation">
                    <NavLink 
                        to="/host"
                        style={({isActive}) => isActive ? style : null}
                    >
                        Host
                    </NavLink>
                    <NavLink 
                        to="/about"
                        style={({isActive}) => isActive ? style : null}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/vans"
                        style={({isActive}) => isActive ? style : null}
                    >
                        Vans
                    </NavLink>
                    <NavLink 
                        to="/login"
                        style={({isActive}) => isActive ? style : null}
                    >
                        Log In
                    </NavLink>
                </div>
            </div>
        </nav>
  )
}