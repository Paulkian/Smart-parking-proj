import NavBar from "./NavBar/NavBar"
import Hero from "./Hero-Heading/Hero"
import SecondSec from "./second-section/SecondSec"
import ThirdSec from "./third-section/ThirdSec"
import FourthSec from "./fourth-section/FourthSec"
import FifthSec from "./fifth-section/FifthSec"
import SixSec from "./six-section/SixSec"
import SevenSec from "./seventh-section/SevenSec"
import EighthSec from "./eighth-section/EighthSec"
import NinethSec from "./nineth-section/NinethSec"

function App(){
    let Component
    switch (window.location.pathname){
        case "/":
            Component = <App/>
            break
            case "/admin":
                Component = <Admin/>
                break
    }
    return(
        <>
            <NavBar/>
            <Component/>
            <Hero/>
            <SecondSec/>
            <ThirdSec/>
            <FourthSec/>
            <FifthSec/>
            <SixSec/>
            <SevenSec/>
            <EighthSec/>
            <NinethSec/>
        </> 
    )
}

export default App