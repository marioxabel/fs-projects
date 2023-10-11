import { Link } from 'react-router-dom'



export default function NavBar() {
  return (
      <nav className="Navbar">
          <Link to="/" className="NavBar__logo">#VANLIFE</Link>
          <div className="NavBar__navigation">
              <Link to="/about">About</Link>
          </div>
      </nav>
  )
}