import "./Hero.css"

function Hero(){
    return(
        <div className="hero-heading">
            <div className="heroSsec">
                <h1>Revolutionize school parking with our <span>QR system.</span>  </h1>
                <p>Say goodbye to parking hassles and easily find available spots.</p>
                <div className="hero-btn">
                    <button className="getspotbtn">Get Your Spot</button>
                    <button className="learnmorebtn">Learn More </button>
                </div>
            </div>
            <img src="./Images/Banner-2.png" alt="" />
            <img className="back-icon" src="./Images/—Pngtree—vector car icon_3989896.png" alt="" />
        </div>
    )
}

export default Hero