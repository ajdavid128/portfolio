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
                <Link to="/about">
                    <Icon link  name="caret right" size="big"/>
                </Link>
            </div>
        </>
    )
}

export default Experience;

