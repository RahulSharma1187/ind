import { useState } from "react";
import { NavLink } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import "./footer.css";


export const Footer = () => {
    const [email, setEmail] = useState("");
    const [thanksEmail, setThanksEmail] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setThanksEmail(true);
        // Example of a POST request to your backend
        const res = await fetch(`${window.location.origin}/api/auth/newsletter`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email }) // Send email in request body
        });

        if (res.ok) {
            console.log("Form successfully submitted");
            setEmail(""); // Clear the input field after successful submission
            setThanksEmail(true);
        } else {
            console.error("Form submission failed");
            setThanksEmail(false);
        }
    };

    return (
        <div className="footer">
            <div className="footerTop">
                <div className="footerTopLft">
                    {
                        thanksEmail === false ? (
                            <>
                            <h2>Lets signup for our newsletter and get access to all the things from Individualism  </h2>
                            <div className="emailSignup">
                                <form onSubmit={handleSubmit}>
                                <label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter your e-mail here" 
                                        name="email" 
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <button type="submit"> <EastIcon/> </button>
                                </label>
                                </form>
                            </div>
                            </>
                        ) : (
                            <h2>Thank You for Newsletter Signup</h2>
                        )
                    }
                    
                    
                </div>
                <div className="footerTopRgt">
                    <div className="footerCompany">
                        <h3>Company</h3>
                        <ul>
                            <li><NavLink to={'/'}>ABOUT US</NavLink></li>
                            <li><NavLink to={'/'}>FOUNDERS</NavLink></li>
                            <li><NavLink to={'/'}>PRACTITIONERS</NavLink></li>
                            <li><NavLink to={'/'}>WELLNESS EQUITY</NavLink></li>
                            <li><NavLink to={'/'}>CAREERS</NavLink></li>
                            <li><NavLink to={'/'}>FOLLOW US</NavLink></li>
                        </ul>
                    </div>
                    <div className="footersupport">
                        <h3>Support</h3>
                        <ul>
                            <li><NavLink to={'/'}>CONTACT US</NavLink></li>
                            <li><NavLink to={'/'}>CONSULTATION</NavLink></li>
                        
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footerBtm">
                &copy; Copyright  Private Policy   Terms of Service     
            </div>
        </div>
    )
}