import reactLogo from '../assets/react.svg'
import './Header.css'

export function Header() {
  return (
    <nav className='container'>
      <div className='logo'>
        <img src={reactLogo} alt="Logo"/>
        <h2>ReactFacts</h2>
      </div>
      
      <p>React Course - Project 1</p>
    </nav>
    
  )
}