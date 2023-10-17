import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function HostVanDetail() {
    const [van, setVan] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans[0]))
    }, [])
    
    console.log(van)
    
    return <h1>Here go van detail page for host</h1>
}

