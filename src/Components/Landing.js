import me1 from "../Media/me1.png";
import { Icon } from "semantic-ui-react"
import { Outlet, Link } from "react-router-dom";



function Landing() {
    return (
        <>
            <div id="landing-content">
                <div id="landing-img">
                    <img id="landing-photo" src={me1} alt="Aaron David portrait"/>
                </div>
                <div id="landing-text-container">
                    <h3 id="landing-text">Hey, my name is Aaron David and welcome to my site!</h3>
                </div>
            </div>
            {/* <div className="nav-left-arrow">
                <Icon link  name="caret left" size="big"/>
            </div> */}
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
            {/* <div className="nav-right-arrow">
                <Icon link  name="caret right" size="big"/>
            </div> */}
        </>
    )
}

export default Landing;