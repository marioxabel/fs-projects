import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css"
import '../../../index.css'

export default function HostLayout() {
    const style = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return(
        <div className="container">
            <nav className="host-layout padding">
                    <NavLink 
                        to="/host"
                        end
                        style={({isActive}) => isActive ? style : null}    
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="/host/income"
                        style={({isActive}) => isActive ? style : null}
                    >
                        Income
                    </NavLink>
                    <NavLink 
                        to="/host/vans"
                        style={({isActive}) => isActive ? style : null}
                    >
                        Vans
                    </NavLink>
                    <NavLink 
                        to="/host/reviews"
                        style={({isActive}) => isActive ? style : null}
                    >
                        Reviews
                    </NavLink>                    
            </nav>
            <Outlet />
        </div>
    )
}