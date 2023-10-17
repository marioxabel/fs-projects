import { Link, Outlet } from "react-router-dom";
import "./HostLayout.css"
import '../../../index.css'

export default function HostLayout() {
    return(
        <>
            <nav className="host-layout padding">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}