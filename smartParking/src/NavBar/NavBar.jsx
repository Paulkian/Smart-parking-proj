import React,{useState, useEffect, useRef} from "react";
import "./NavBar.css";

function NavBar(){
    
    const [display, setDisplay] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setDisplay(false);
            console.log(menuRef.current);
          }      
        };
    
        document.addEventListener("mousedown", handler);
        
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }

      });

    return(
        
        <div className="Navbar-con" ref={menuRef}>

            <h3><img src="./Images/parking.png" alt="" />Smart Parking System</h3>
            <div className="navBar-ops">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>   
            </div>
            <div className="navBar-btn" >
                <button className="navbar-signin" onClick={() => {setDisplay(!display)}}>Sign In</button>
                <button className="navbar-signup" ref={menuRef} >Sign Up</button>
            </div>
            
            <div className={`log-inpage ${display? 'active' : 'inactive'}`}>
                    <h1>Sign In to our smart parking</h1>
                    <h2>UNIVERSITY OF RIZAL SYSTEM</h2>
                    <form>
                    
                        <div className="StudentID">
                            <label htmlFor="StudentID">Student ID: </label>
                            <div className="student-con">
                                <input type="text" name="StudentID" autoComplete="off" onChange={(e) => setStudentid(e.target.value)}/>
                            </div>
                        </div>
                        

                        <div className="password">
                            <label htmlFor="password">Password: </label>
                            <div className="password-con">
                                <input type="password" name="Password" autoComplete="off" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <button className="login-button"><a href="/admin">Sign In</a></button>
                    </form>
            </div>
            

        </div>
    )
}

export default NavBar