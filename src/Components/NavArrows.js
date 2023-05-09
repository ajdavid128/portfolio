import { Icon } from "semantic-ui-react";


function NavArrows() {
    return (
        <>
        <h1>arrows</h1>
        <Icon link className="nav-left-arrow" name="caret left" size="big"/>
        <Icon link className="nav-down-arrow" name="caret down" size="big"/>
        <Icon link className="nav-right-arrow" name="caret right" size="big"/>
        </>
    )
}

export default NavArrows;