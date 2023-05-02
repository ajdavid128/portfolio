import me1 from "../Media/me1.png";



function Landing() {
    return (
        <>
            <h1>Landing</h1>
            <div className="centered">
                <img src={me1} alt="Aaron David portrait"/>
            </div>
            <div className="centered">
                <h3>Hey, my name is Aaron David and welcome to my site!</h3>
            </div>
        </>
    )
}

export default Landing;