import { Icon } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";


function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <div className="nav-left-arrow">
                <Link to="/experience">
                    <Icon link  name="caret left" size="big"/>
                </Link>
            </div>
            <div className="nav-down-arrow">
                <Link to="/about">
                    <Icon link  name="caret down" size="big"/>
                </Link>
            </div>
            <div className="nav-right-arrow">
                <Link to="/projects">
                    <Icon link  name="caret right" size="big"/>
                </Link>
            </div>
        </>
    )
}

export default Contact;

{/* <Link to="/about">About</Link>
            <br/>
            <Link to="/contact">Contact</Link>
            <br/>
            <Link to="/experience">Experience</Link>
            <br/>
            <Link to="/projects">Projects</Link>
            <Outlet /> */}