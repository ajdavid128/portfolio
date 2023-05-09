import { Icon } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";


function NavArrows() {
    return (
        <>
            <h1>arrows</h1>
            <Link to="/about">About</Link>
            <Icon link className="nav-left-arrow" name="caret left" size="big"/>

            <Icon link className="nav-down-arrow" name="caret down" size="big"/>

            <Icon link className="nav-right-arrow" name="caret right" size="big"/>
            {/* <Link to="/about">About</Link>
            <br/>
            <Link to="/contact">Contact</Link>
            <br/>
            <Link to="/experience">Experience</Link>
            <br/>
            <Link to="/projects">Projects</Link>
            <Outlet /> */}
        </>
    )
}

export default NavArrows;