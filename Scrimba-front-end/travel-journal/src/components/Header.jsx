import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    return (
        <header>
            <FontAwesomeIcon icon={faEarthAmericas} className="worldIcon"/>
            <h1> my travel journal</h1>
        </header>
    )
}