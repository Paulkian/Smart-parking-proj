import "./FourthStyle.css"

function FourthSec(){
    return(
        <section className="fourthSec">
            <div className="fourth-details">
                <h1>Easy Registration and Convenient Parking Process</h1>
                <div className="fourth-btn">
                    <button>Register</button>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="fourth-step">
                <div className="fourth-vertical">
                    <img src="./Icons/Icons-number/circle-1.png" alt="" />
                    <div className="v1"></div>
                    <img src="./Icons/Icons-number/circle-2.png" alt="" />
                    <div className="v1"></div>
                    <img src="./Icons/Icons-number/circle-3.png" alt="" />
                    <div className="v1"></div>
                    <img src="./Icons/Icons-number/circle-4.png" alt="" />
                </div>
                <ul>
                    <li>
                        <h4>Register Online</h4>
                        <p>Sign up for an account and receive your unique QR code.</p>
                    </li>
                    <li>
                        <h4>Scan QR Code</h4>
                        <p>Simply scan your QR code at the designated parking areas.</p>
                    </li>
                    <li>
                        <h4>Park Easily</h4>
                        <p>Find available parking spots and conveniently park in the school.</p>
                    </li>
                    <li>
                        <h4>Enjoy Convenience</h4>
                        <p>Experience hassle-free parking with our QR code system.</p>
                    </li>
                    
                </ul>
            </div>
            <div className="fourth-background-icon">
                <img src="./Icons/qr-code_8772090.png" alt="" />
            </div>
        </section>
    )
}
export default FourthSec