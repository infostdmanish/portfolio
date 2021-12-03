import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone]= useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0jzxxir', 'template_r05b7p4', formRef.current, 'user_zPauAftoTT9mkcBbUwrc4')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +61-0450-969-60
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            Infostdmanish@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            6/23 Bowen Street, Windsor 4030 QLD Australia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b> What's your Story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea  style={{backgroundColor: darkMode && "#333"}} name="message" placeholder="Message" rows="5" />
                        <button>Submit</button>
                        {done && " Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

