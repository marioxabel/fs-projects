import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { van } = useOutletContext()
    
    return (
        <section className="detail-info">
            <h4>{van.price}<span>/day</span></h4>
        </section>
    )
}