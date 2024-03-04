import "./SixStyle.css"

function SixSec(){
    return(
        <section className="sixsec">
            <div className="six-pricingTitle">
                <h1>Pricing Plans</h1>
                <p>Sign up now and enjoy hassle-free parking at affordable prices.</p>
            </div>
            <div className="sic-pricingDetails">
                <div className="sic-pricingDetails-step">
                    <div className="sic-pricingDetails-step-img">
                        <img src="./Images/Icons/icons8-1-50.png" alt="" />
                        <img src="./Images/Icons/icons8-1-50.png" alt="" />
                        <img src="./Images/Icons/icons8-1-50.png" alt="" />
                    </div>
                    <ul>
                        <li>
                            <h4>Key Features</h4>
                            <p>24/7 access to parking facilities</p>
                        </li>
                        <li>
                            <h4>Key Features</h4>
                            <p>Secure and convenient location</p>
                        </li>
                        <li>
                            <h4>Key Features</h4>
                            <p>Discounts on additional services for members</p>
                        </li>
                    </ul>
                </div>
                <div className="sic-pricingDetails-container">
                    <div className="sic-pricingDetails-container-heading">
                        <div className="sic-pricingDetails-container-heading-head">
                            <h4>Basic Plan</h4>
                            <p>Perfect for occasional parkers</p>
                        </div>
                        <h1>$19/sem</h1>
                    </div>
                    <hr/>
                    <div className="sic-pricingDetails-container-p">
                        <p>Includes:</p>
                    </div>
                    
                    <div className="sic-pricingDetails-container-details">
                        
                        <ul>
                            <li><img src="./Icons/check-solid.svg"/><p>24/7 access</p></li>
                            <li><img src="./Icons/check-solid.svg"/><p>Convenient location</p></li>
                            <li><img src="./Icons/check-solid.svg"/><p>Friendly customer support</p></li>
                            <li><img src="./Icons/check-solid.svg"/><p>Reserved parking spots</p></li>
                            <li><img src="./Icons/check-solid.svg"/><p>Dedicated customer support</p></li>
                        </ul>
                        <ul>
                            <li><img src="./Icons/check-solid.svg"/><p>Secure parking facilities</p></li>
                            <li><img src="./Icons/check-solid.svg"/><p>Easy payment options</p></li>
                            <li><img src="./Icons/check-solid.svg"/><p>Discounts on additional services</p></li>
                            <li><img src="./Icons/check-solid.svg"/><p>Priority access to facilities</p></li>
                            <li><img src="./Icons/check-solid.svg"/><p>Discounts on additional services</p></li>
                        </ul>
                    </div>
                    <hr/>

                    <div className="sic-pricingDetails-container-btn">
                        <button>Get Started</button>
                    </div>
                </div>

            </div>
        </section>
    )
    
}
export default SixSec