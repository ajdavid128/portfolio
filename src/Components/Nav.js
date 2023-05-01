import { Outlet, Link } from "react-router-dom";



function Nav() {
    return (
        <>
            <h1>Navvvvvv</h1>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Outlet />
        </>
    )
}

export default Nav;