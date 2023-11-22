import { useEffect, useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import './VanDetail.css'

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const { id } = useParams()
    const location = useLocation()

    const search = location.state?.search || ""
    
    useEffect(() => {
        fetch(`/api/vans/${id}`)
        .then(response => response.json())
        .then(data => setVan(data.vans))
    }, [id])
    
    return (
        <div className="padding container">
            <div className="back">
                        <Link to={`../?${search}`} relative="path">
                            &larr; <span>Back to {location.state?.type ? `${location.state.type} vans` : "all vans"}</span>
                        </Link>
                    </div>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={`${van.name} van`} />
                    <div className={`van-info__type van-info__type--${van.type}`}>{van.type}</div>
                    <h1>{van.name}</h1>
                    <h3>${van.price}<span>/day</span></h3>
                    <p>{van.description}</p>
                    <button>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2> }
        </div>    
    )
}

// {
//     "vans": {
//       "id": "4",
//       "name": "Dreamfinder",
//       "price": 65,
//       "description": "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
//       "type": "simple"
//     }
//   }