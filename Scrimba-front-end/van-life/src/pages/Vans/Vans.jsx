import { useEffect, useState } from 'react'
import './Vans.css'
import { Link, useSearchParams } from 'react-router-dom'
import getVans from '../../../api'

export default function Vans() {
    const [vans, setVans] = useState([])
    let [searchParams, setSearchParams] = useSearchParams()
    let typeFilter = searchParams.get(["type"])
    
    useEffect(() => {
        async function loadVans() {
            const data = await getVans()
            setVans(data)
        }
        
        loadVans()
    }, [])
    
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans
    
    const vansElements = displayedVans.map(van => {
        return (
            <div key={van.id} className='van'>
                <Link to={van.id} state={{search: searchParams.toString(), type: typeFilter}} className="van__link">
                    <img src={van.imageUrl} alt={`van model: ${van.name}`} />
                    <div className='van-info__name-price'>
                        <h3>{van.name}</h3>
                        <h3>${van.price}</h3>
                    </div>
                    <span>/day</span>
                    <div className={`van-info__type van-info__type--${van.type}`}>{van.type}</div>
                </Link>
            </div>
        )
    })
    
    return (
        <div className='vans padding container'>
            <h2>Explore our van options</h2>
            <div>
                <button 
                    className={`filter filter--simple ${typeFilter === "simple" && "active--simple"}`} 
                    onClick={() => setSearchParams({type: "simple"})}
                >Simple</button>
                <button 
                    className={`filter filter--rugged ${typeFilter === "rugged" && "active--rugged"}`}
                    onClick={() => setSearchParams({type: "rugged"})}
                >Rugged</button>
                <button 
                    className={`filter filter--luxury ${typeFilter === "luxury" && "active--luxury"}`}
                    onClick={() => setSearchParams({type: "luxury"})}
                >Luxury</button>
                {typeFilter && <button 
                    className="filter clear"
                    onClick={() => setSearchParams({})}
                >Clear filters</button>}
            </div>
            <div className='vans__container'>
                {vansElements}    
            </div>
            
            
        </div>
    )
}