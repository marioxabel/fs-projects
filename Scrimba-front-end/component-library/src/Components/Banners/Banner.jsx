/* eslint-disable react/prop-types */
import { validateValue } from "../utils"
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import "./Banner.css"
import classnames from "classnames";

export default function Banner({ status, title, text, className, ...rest}) {
    const validStatus = ["success", "warning", "error", "neutral"]
    const validatedStatus = validateValue("Banner", status, validStatus, "neutral")
    
    const icon = status === "success" ? <FaCheckCircle  className="banner__icon banner__icon--status-success"/> 
        : status === "warning" ? <FaExclamationTriangle className="banner__icon banner__icon--status-warning"/>
        : status === "error" ? <FaTimesCircle className="banner__icon banner__icon--status-error"/>
        : <FaInfoCircle className="banner__icon banner__icon--status-neutral"/>
    
    const allClasses = classnames(`banner banner--status-${validatedStatus}`, className)
    
    return (
        <div className={allClasses} {...rest}>
            {icon}
            <div className="banner__content">
                <span className="banner__title">{title}</span>
                {text && <p className="banner__text">{text}</p>}
            </div>
        </div>
    )
}