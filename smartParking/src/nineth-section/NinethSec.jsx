import "./ninethStyle.css"
function NinethSec(){
    return(
        <section className="ninenthSec">
            <h1>Logo</h1>
            <div className="ninethSec-details">
                <ul>
                    <li>
                        <h4>About Us</h4>
                        <a>Contact</a>    
                        <a>FAQs</a>
                        <a>Support</a>
                        <a>Terms</a>
                        <a>Privacy</a>
                    </li>
                    <li>
                        <h4>Blog</h4>
                        <a>Help Center</a>
                        <a>Community</a>
                        <a>Resources</a>
                        <a>Partners</a>
                        <a>Careers</a>
                    </li>
                    <li>
                        <h4>Events</h4>
                        <a href="">Press</a>
                        <a>Testimonials</a>
                        <a>Case Studies</a>
                        <a>Gallery</a>
                        <a>Features</a>
                    </li>
                    <div className="ninethSec-sub">
                        <h4>Subscribe</h4>
                        <p>Stay up to date with our latest features and releases.</p>
                        <input type="text" placeholder="Enter your email"/>
                        <button>Subcribe</button>
                        <h6>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</h6>
                    </div>
                </ul>
                
            </div>
                
            <hr className="nineth-hr"/>
            <div className="nineth-footer">
                <p>&#169; 2024 SmartParking. All rights reserved.</p>
            </div>
        </section>
    )
}

export default NinethSec