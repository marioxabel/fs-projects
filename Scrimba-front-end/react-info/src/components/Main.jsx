import reactLogo from '../assets/react.svg'

import './Main.css'

export function Main() {
    return (
        <main className='container'>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well ober 100k stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={reactLogo} alt="" />
        </main>
    )
}