/* eslint-disable react/prop-types */
import "./Badge.css"
import { validateValue } from "../utils";
import classnames from "classnames"

export default function Badge({ children, color = "gray", design = "square", className, ...rest }) {
    const validColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    const validDesigns =["square", "pill"]
    
    const validatedColor = validateValue("Badge", color, validColors, "gray")
    const validatedDesign = validateValue("Badge", design, validDesigns, "square")
    
    const allClasses = classnames(`badge badge--${validatedColor} badge--${validatedDesign}`, className)
    
    return (
        <div className={allClasses} {...rest} >{children}</div>
    )
}