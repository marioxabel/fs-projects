import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}