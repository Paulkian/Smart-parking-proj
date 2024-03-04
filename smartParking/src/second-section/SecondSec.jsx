import "./SecondStyle.css"
function SecondSec(){
    return(
        <section className="secondsection">
            <div className="second-details">
                <h1>Experience Convenient parking with Our <span>QR Code Scanning Feature</span> </h1>
                <p>Scan the QR to easily access and park in our school premises.</p>
                <div className="second-features">
                    <div className="second-features1">
                        <h3>Effortless Access</h3>
                        <p>No More hassle of searching for a parking spot. Simply scan and park!</p>
                    </div>
                    <div className="second-features2">
                        <h3>Seamless Parking</h3>
                        <p>Enjoy a seamless parking experience with our convenient GR code scanning feature</p>
                    </div>
                </div>
            </div>
            <img src="./Images/51eae297-40ff-4157-914a-2afb3fbe029e.svg" alt="" />
            <div className="background-image-second">
                <img src="./Images/motorcycle.png" alt="" />
            </div>
        </section>
    )
}
export default SecondSec