import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { van } = useOutletContext()
    return (
        <section className="detail-info">
            <img src={van.imageUrl} alt={van.name} />
        </section>
    )
}