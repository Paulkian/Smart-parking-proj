import "./ThirdStyle.css"

function ThirdSec(){
    return(
        <section className="thirdSec">
            <div className="third-details">
                <h1>Check Parking Availability and Reserve your Spot</h1>
                <p>Welcome to our parking website!! Here you can easily check if parking spots are available in the school and reserve your spot hassle-free.</p>

                <div className="third-features">
                    <div className="third-features1">
                        <h3>Available Now</h3>
                        <p>Check real-Time parking Availability and reserve your spot with just a few click.</p>
                    </div>
                    <div className="third-features2">
                        <h3>Easy Reservations</h3>
                        <p>Make parking reservtion in advance to secure your spot and avoid any inconvenience.</p>
                    </div>
                    
            </div>
                    <div className="third-btn">
                        <button>Learn More</button>
                        <button>Sign In</button>
                    </div>
            </div>
            
            <img src="./Images/Issues-You-Can-Solve-With-a-Parking-App.png" alt="" />
            <div className="thridSec-background-design">
            <img className="back-icon-third" src="./Images/—Pngtree—vector car icon_3989896.png" alt="" />
            </div>
        </section>
    )
}

export default ThirdSec