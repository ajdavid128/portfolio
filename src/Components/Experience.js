import { Icon } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";


function Experience() {
    return (
        <>
            <h1>Experience</h1>
            <div className="nav-left-arrow">
                <Link to="/projects">
                    <Icon link  name="caret left" size="big"/>
                </Link>
            </div>
            <div className="nav-down-arrow">
                <Link to="/contact">
                    <Icon link  name="caret down" size="big"/>
                </Link>
            </div>
            <div className="nav-right-arrow">
                <Link to="/about">
                    <Icon link  name="caret right" size="big"/>
                </Link>
            </div>
        </>
    )
}

export default Experience;

