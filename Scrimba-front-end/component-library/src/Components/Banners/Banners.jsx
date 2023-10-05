import { validateValue } from "../utils"
import "./Banners.css"

export default function Banner({ status, title, text}) {
    const validStatus = ["success", "warning", "error", "neutral"]
    
    const validatedStatus = validateValue("Banner", status, validStatus, "success")
    
    return (
        <div className={`banner ${validatedStatus}`}>
            <span className="title">{title}</span>
            {text && <p>{text}</p>}
        </div>
    )
}