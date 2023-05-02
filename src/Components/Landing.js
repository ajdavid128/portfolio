import me1 from "../Media/me1.png";



function Landing() {
    return (
        <>
            <h1>Landing</h1>
            <div id="landing-content">
                <div id="landing-img">
                    <img id="landing-photo" src={me1} alt="Aaron David portrait"/>
                </div>
                <div id="landing-text">
                    <h3 className="center">Hey, my name is Aaron David and welcome to my site!</h3>
                </div>
            </div>
         
        </>
    )
}

export default Landing;