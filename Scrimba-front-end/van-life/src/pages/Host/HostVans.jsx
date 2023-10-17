import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './Host.css'

export default function HostVans() {
    const [hostVans, setHostVans] = useState([])
    
    useEffect(() => {
        fetch("/api/host/vans")
            .then(response => response.json())
            .then(data => setHostVans(data.vans))
    }, [])
    
    const vans = hostVans.map(van => {
        return (
            <Link key={van.id} to={`/host/vans/${van.id}`}>
                <div className="host-van">
                    <img src={van.imageUrl} alt={`van: ${van.name}`} />
                    <div className="host-van__details">
                        <h3>{van.name}</h3>
                        <p>{`$${van.price}/day`}</p>
                        
                    </div>
                </div>
            </Link>
        )
    })
    
    return (
        <section className="host-vans-page">
            {hostVans.length > 0 ? (
                <>
                    <h1>Your listed vans</h1>
                    {vans}
                </>
            ) : (
                <h2>Loading</h2>
            )}
        </section>
    )
    
}

//     {
//       "id": "1",
//       "name": "Modest Explorer",
//       "price": 60,
//       "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
//       "type": "simple",
//       "hostId": "123"
//     },
//     {
//       "id": "2",
//       "name": "Beach Bum",
//       "price": 80,
//       "description": "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
//       "type": "rugged",
//       "hostId": "123"
//     },
//     {
//       "id": "6",
//       "name": "Green Wonder",
//       "price": 70,
//       "description": "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
//       "type": "rugged",
//       "hostId": "123"
//     }
//   