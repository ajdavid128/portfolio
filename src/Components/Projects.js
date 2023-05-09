import { Icon } from "semantic-ui-react";
import Project1 from "./Project1";
import Project2 from "./Project2";


function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <Project1 />
            <Project2 />
            <div className="nav-left-arrow">
                <Icon link  name="caret left" size="big"/>
            </div>
            <div className="nav-down-arrow">
                <Icon link  name="caret down" size="big"/>
            </div>
            <div className="nav-right-arrow">
                <Icon link  name="caret right" size="big"/>
            </div>
        </div>
    )
}

export default Projects;