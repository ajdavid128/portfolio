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
                <div className="center-side-arrow-parent">
                    <div>
                        <Icon link  name="caret left" size="big"/>
                    </div>
                    <div>
                        <p>About</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="nav-down-arrow">
                <Link to="/contact">
                    <div className="center-nav-arrow-parent">
                        <div>
                            <p>Contact</p>
                        </div>
                        <div className="center-nav-arrow-icon">
                            <Icon link  name="caret down" size="big"/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="nav-right-arrow">
                <Link to="/experience">
                <div className="center-side-arrow-parent">
                    <div>
                        <p>Experience</p>
                    </div>
                    <div>
                        <Icon link  name="caret right" size="big"/>
                    </div>
                </div>  
                </Link>
            </div>
        </div>
    )
}

export default Projects;
