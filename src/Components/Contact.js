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
                    <div className="center-nav-arrow-parent">
                        <div>
                            <p>About</p>
                        </div>
                        <div className="center-nav-arrow-icon">
                            <Icon link  name="caret down" size="big"/>
                        </div>
                    </div>
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

