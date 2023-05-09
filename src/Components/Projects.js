import { Icon } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";

import Project1 from "./Project1";
import Project2 from "./Project2";


function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <Project1 />
            <Project2 />
            <div className="nav-left-arrow">
                <Link to="/about">
                    <Icon link  name="caret left" size="big"/>
                </Link>
            </div>
            <div className="nav-down-arrow">
                <Link to="/contact">
                    <Icon link  name="caret down" size="big"/>
                </Link>
            </div>
            <div className="nav-right-arrow">
                <Link to="/experience">
                    <Icon link  name="caret right" size="big"/>
                </Link>
            </div>
        </div>
    )
}

export default Projects;

{/* <Link to="/about">About</Link>
            <br/>
            <Link to="/contact">Contact</Link>
            <br/>
            <Link to="/experience">Experience</Link>
            <br/>
            <Link to="/projects">Projects</Link>
            <Outlet /> */}