import logo from '../assets/trollface.png'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="troll face meme" />
                <h2>Meme Generator</h2>
            </div>
        </header>
    )
}