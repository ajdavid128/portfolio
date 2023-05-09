import me1 from "../Media/me1.png";
import { Icon } from "semantic-ui-react"


function Landing() {
    return (
        <>
            <div id="landing-content">
                <div id="landing-img">
                    <img id="landing-photo" src={me1} alt="Aaron David portrait"/>
                </div>
                <div id="landing-text">
                    <h3 className="center">Hey, my name is Aaron David and welcome to my site!</h3>
                </div>
            </div>
            <Icon link className="nav-left-arrow" name="caret left" size="big"/>
            <Icon link className="nav-down-arrow" name="caret down" size="big"/>
            <Icon link className="nav-right-arrow" name="caret right" size="big"/>
        </>
    )
}

export default Landing;