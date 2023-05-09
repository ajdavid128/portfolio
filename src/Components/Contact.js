import { Icon } from "semantic-ui-react";


function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <div className="nav-left-arrow">
                <Icon link  name="caret left" size="big"/>
            </div>
            <div className="nav-down-arrow">
                <Icon link  name="caret down" size="big"/>
            </div>
            <div className="nav-right-arrow">
                <Icon link  name="caret right" size="big"/>
            </div>
        </>
    )
}

export default Contact;