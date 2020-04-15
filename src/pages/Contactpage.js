import React, { useState } from "react";

export default function Contactpage(){
    const [firstNameError, setFirstNameError] = useState(true);
    const [lastNameError, setLastNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [messageError, setMessageError] = useState(true);
    const [formWorked, setFormWorked] = useState(false);

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        // eslint-disable-next-line
        let emailREG = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        switch (name) {
            case "firstname":
                (value !== "") ? setFirstNameError(false) : setFirstNameError(true)
                break;
            case "lastname":
                (value !== "") ? setLastNameError(false) : setLastNameError(true)
                break;
            case "email":
                (emailREG.test(value)) ? setEmailError(false) : setLastNameError(true)
                break;
            case "message":
                (value !== "") ? setMessageError(false) : setMessageError(true)
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormWorked(true);
    }

    return(
        <>
        <div className="contactTop">
            <p>I am available for both freelance projects &#38; hire.</p>
            <p>Feel free to shoot me a message if you just wanna say hello (or play games) too.</p>
        </div>
        <div className="contactWrapper">
            <div className="row">
                <div className="col-sm-6">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <p>Enter your first name</p>
                        <input type="text"
                                name="firstname"
                                onChange={handleChange}
                                className="form-control"
                        />
                        <p className={(firstNameError ? "error" : "hide")}>Please enter a valid first name</p>
                        <br />
                        <p>Enter your last name</p>
                        <input type="text"
                                name="lastname"
                                onChange={handleChange}
                                className="form-control"
                        />
                        <p className={(lastNameError ? "error" : "hide")}>Please enter a valid last name</p>
                        <br />
                        <p>Enter your email</p>
                        <input type="text"
                                name="email"
                                onChange={handleChange}
                                className="form-control"
                        />
                        <p className={(emailError ? "error" : "hide")}>Please enter a valid email</p>
                        <br />
                        <p>Enter your message</p>
                        <textarea name="message"
                                onChange={handleChange}
                                className="form-control"
                        />
                        <p className={(messageError ? "error" : "hide")}>Please enter your message</p>
                        <br />
                        <input type="submit" disabled={firstNameError || lastNameError || emailError || messageError} className="btn contactBtn"></input>
                    </form>
                    <br />
                    <div className={(formWorked) ?  "show" : "hide"}>
                        <p className="formSuccess">Your form submitted successfully!</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}