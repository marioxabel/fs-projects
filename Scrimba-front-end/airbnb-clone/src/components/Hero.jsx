import heroImg from '../assets/photo-grid.png'
import './Hero.css'

export default function Hero() {
    return (
        <section className='container hero'>
            <img className='hero--img' src={heroImg} alt="Experiences" />
            <h1>Online Experiences</h1>
            <p className='hero--p'>
                Join unique interactive activities led by one-of-a-kind hotst-all without leaving home
            </p>            
        </section>
    )
}