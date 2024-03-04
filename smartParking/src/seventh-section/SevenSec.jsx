import "./SevenStyle.css"

function SevenSec(){
    return(
        <section className="seven-section">
            <div className="seven-section-heading">
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about our parking system and how to handle any issues.</p>
            </div>
            
            <div className="question">
                <ul>
                    <li>
                        <div className="question-icon">
                            <img src="./Icons/Plus-Icons/plus-solid.svg" alt="" />
                            <h3>How does it work?</h3>
                        </div>
                        <p>Our parking system requires you to scan your QR code at the entrance to gain access to the school parking lot. Once scanned, you will be able to park your vehicle securely.</p>
                    </li>
                    <li>
                    <div className="question-icon">
                            <img src="./Icons/Plus-Icons/plus-solid.svg" alt="" />
                            <h3>What if I lose my QR code?</h3>
                        </div>
                        <p>If you lose your QR code, please contact our support team immediately. They will assist you in retrieving or generating a new QR code.</p>
                    </li>
                    <li>
                    <div className="question-icon">
                            <img src="./Icons/Plus-Icons/plus-solid.svg" alt="" />
                            <h3>How can I pay for parking?</h3>
                        </div>
                        <p>We offer various payment options for parking, including credit card, mobile payment apps, and prepaid parking cards. You can choose the method that suits you best.</p>
                    </li>
                    <li>
                    <div className="question-icon">
                            <img src="./Icons/Plus-Icons/plus-solid.svg" alt="" />
                            <h3>What if I have a parking issue?</h3>
                        </div>
                        <p>If you encounter any issues with parking, such as a malfunctioning gate or difficulty finding a spot, please reach out to our support team for immediate assistance.</p>
                    </li>
                    <li>
                    <div className="question-icon">
                            <img src="./Icons/Plus-Icons/plus-solid.svg" alt="" />
                            <h3>Can I reserve a parking spot?</h3>
                        </div>
                        <p>Currently, we do not offer a reservation system for parking spots. Parking is available on a first-come, first-served basis.</p>
                    </li>

                </ul>
            </div>
            <div className="seven-question-footer">
                <h1>Still have questions?</h1>
                <p>Contact our support team for further assistance.</p>
                <button>Contact</button>
            </div>
        </section>
    )
}

export default SevenSec