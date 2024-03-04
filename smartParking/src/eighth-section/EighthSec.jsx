import "./EighthStyle.css"

function EighthSec(){
    return(
        <section className="eighth-sec">
            <h1>Contact Support</h1>
            <p>We're here to help you with any questions or concerns.</p>
            <div className="eighth-details">
                <ul>
                    <li>
                        <h4><img src="./Icons/check.png"/>Email</h4>
                        <p>Send us an email today!</p>
                        <a href="#">hello@relume.io</a>
                    </li>
                    <li>
                        <h4><img src="./Icons/check.png"/>Phone</h4>
                        <p>Give us a call now!</p>
                        <a href="#">+1 (555) 000-0000</a>
                    </li>
                    <li>
                        <h4><img src="./Icons/check.png"/>Office</h4>
                        <p>123 Sample St, Sydney NSW 2000 AU</p>
                        <a href="#">Get Directions </a>
                    </li>
                </ul>
                <img className="eighth-details-image" src="./Images/Creating-a-Parking-App-From-A-to-Z-Guide.png"/>
            </div>
        </section>
    )
}

export default EighthSec