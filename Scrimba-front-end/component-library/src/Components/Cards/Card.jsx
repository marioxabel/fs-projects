/* eslint-disable react/prop-types */
import { AiFillStar} from "react-icons/ai";
import "./Card.css"
import classnames from "classnames";

export default function Card({ 
    // Content props
    icon, 
    title,
    text,
    // Styling props
    iconColor, 
    iconBackgroundColor,
    backgroundColor,
    titleColor,
    textColor,
    className,
    hover,
    ...rest
}) {
    const allClasses = classnames("card", hover && "card--hover", className)
    
    return (
        <div 
            className={allClasses}   
            style={{
                backgroundColor: backgroundColor ? backgroundColor : "white",
                color: textColor ? textColor : "#6B7280" 
            }}
            {...rest}
        >
            <div 
                className="card__icon" 
                style={{
                    color : iconColor ? iconColor : "white",
                    backgroundColor: iconBackgroundColor ? iconBackgroundColor : "#3F75FE"}}
            >
                {icon ? icon : <AiFillStar />} 
            </div>
            <span className="card__title" style={{color : titleColor ? titleColor : "black"}}>{title}</span>
            <p className="card__text">{text}</p>
        </div>
    )
}