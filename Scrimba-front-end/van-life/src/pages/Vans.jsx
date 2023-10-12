import { useEffect, useState } from 'react'
import './Vans.css'

export default function Vans() {
    const [vans, setVans] = useState([])
    
    useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => setVans(data.vans))
    }, [])
    
    const vansElements = vans.map(van => {
        return (
            <div key={van.id} className='van'>
                <img src={van.imageUrl} alt={`van model: ${van.name}`} />
                <div className='van-info__name-price'>
                    <h3>{van.name}</h3>
                    <h3>${van.price}</h3>
                </div>
                <span>/day</span>
                <div className={`van-info__type van-info__type--${van.type}`}>{van.type}</div>
                
            </div>
        )
    })
    
    return (
        <div className='vans__page'>
            <h2>Explore our van options</h2>
            <div className='vans__container'>
                {vansElements}    
            </div>
            
            
        </div>
    )
}