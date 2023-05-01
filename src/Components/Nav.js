import { Outlet, Link } from "react-router-dom";



function Nav() {
    return (
        <>
            <h1>Navvvvvv</h1>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/contact">Contact</Link>
            <br/>
            <Link to="/experience">Experience</Link>
            <br/>
            <Link to="/projects">Projects</Link>
            <Outlet />
        </>
    )
}

export default Nav;