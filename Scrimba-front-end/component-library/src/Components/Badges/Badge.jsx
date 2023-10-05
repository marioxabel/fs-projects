/* eslint-disable react/prop-types */
import "./Badge.css"
import { validateValue } from "../utils";

export default function Badge({ children, color = "gray", design = "square" }) {
    const validColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    const validDesigns =["square", "pill"]
    
    const validatedColor = validateValue("Badge", color, validColors, "gray")
    const validatedDesign = validateValue("Badge", design, validDesigns, "square")
    
    return (
        <div className={`badge ${validatedColor} ${validatedDesign}`}>{children}</div>
    )
}