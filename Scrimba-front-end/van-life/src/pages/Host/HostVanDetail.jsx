import { NavLink, Link, useParams, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Host.css"

export default function HostVanDetail() {
    const [van, setVan] = useState({})
    const { id } = useParams()
    const style = {
        fontWeight: "bold",
        textDecoration: "underline", 
        color: "#161616"
    }
    
    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans[0]))
    }, [])
    
    return (
        <>
            { Object.keys(van).length > 0 ? (
                <>
                    <div className="back">
                        <Link to='..' relative="path">
                            &larr; <span>Back to all vans</span>
                        </Link>
                    </div>
                    <section className="van-detail-page__container" >
                    
                        <div className="van-detail-page">
                        <img src={van.imageUrl} alt={`${van.name} van`} />
                            <div className="van-details">
                                <div className={`van-detail__type van-detail__type--${van.type}`}>{van.type}</div>
                                <h2>{van.name}</h2>
                                <p><span>{`$${van.price}`}</span>/day</p>
                            </div>
                        </div>
                        <nav className="van-detail-page__nav">
                            <NavLink to='.' end style={({isActive}) => isActive ? style : null}>Details</NavLink>
                            <NavLink to='pricing'  style={({isActive}) => isActive ? style : null}>Pricing</NavLink>
                            <NavLink to='photos' style={({isActive}) => isActive ? style : null}>Photos</NavLink>
                        </nav>
                        <Outlet context={{ van }}/>
                    </section>
                </>
            ) : <h2>Loading...</h2>}
        </>
    )
}

