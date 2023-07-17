import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img"  src={props.imageURL} alt={props.title} />
            <div className="card--info">
                <div className="card--location">
                    <FontAwesomeIcon icon={faLocationDot} className='locationIcon' />
                    <p>{props.location}</p>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="card--date">{props.start} - {props.end}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}