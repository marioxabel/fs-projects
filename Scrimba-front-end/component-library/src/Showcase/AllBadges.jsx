import Badge from "../Components/Badges/Badge"
import "./Showcase.css"

export default function AllBadges() {
    const validColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    const validDesigns =["square", "pill"]
    
    const squareBadges = validColors.map((color) => (
        <div key={`${validDesigns[0]} ${color}`}>
            <p className="info">{color} - {validDesigns[0]}</p>
            <Badge color={color} design={validDesigns[0]}>
                Badge
            </Badge>
        </div>
    ))
    
    const pillBadges = validColors.map((color) => (
        <div key={`${validDesigns[1]} ${color}`}>
            <p className="info">{color} - {validDesigns[1]}</p>
            <Badge color={color} design={validDesigns[1]}>
                Badge
            </Badge>
        </div>
    ))
    
    return (
        <div>
            <h2>Badges</h2>
            <h3>Square</h3>
            <div className="flex">
                {squareBadges}
            </div>
            <h3>Pill</h3>
            <div className="flex">
                {pillBadges}
            </div>
        </div>
    )

}