import React from "react";
import Recaptcha from 'react-google-recaptcha'

import "./ContactSmartphone.css";
import "./ContactDesktop.css";

const Contact = () => {
    /*const recaptchaRef = React.createRef();

    const initialState = {
        senderName: "",
        senderEmail: "",
        message: "",
        dataConsent: false
    };
    const [formData, setFormData] = useState(initialState);

    const onUpdate = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onConsent = e => {
        setFormData({
            ...formData,
            dataConsent: e.target.checked
        });
    };*/

    /*const onSubmit = e => {
        e.preventDefault();
        recaptchaRef.current.reset();

        fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (res.status !== 200) {
                    res.text().then(text => {
                        setAlert(text, "error");
                        console.log(text);
                    });
                } else {
                    res.text().then(text => {
                        setAlert(text, "success");
                        console.log(text);
                    });
                    setFormData(initialState);
                }
            })
            .catch(err => console.log(err));
    };

    const setAlert = (text, type) => {
        document.querySelector(".contactForm__alert").innerHTML = text;
        document
            .querySelector(".contactForm__alert")
            .classList.add("contactForm__alert--" + type);
        setTimeout(() => {
            document
                .querySelector(".contactForm__alert")
                .classList.remove("contactForm__alert--" + type);
            document.querySelector(".contactForm__alert").innerHTML = "";
        }, 5000);
    };*/

    const recaptchaRef = React.createRef()
    const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY;
    if (typeof RECAPTCHA_KEY === 'undefined') {
        throw new Error(`
        Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
        You probably forget to set it in your Netlify build environment variables. 
        Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
        Note this demo is specifically for Recaptcha v2
        `)
    }

    
                /*<Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />*/

    return (
        <section id="contact">
            <h2 className="sectionTitle">restons en contact</h2>
            <form className="contactForm" name="contact" method="POST" data-netlify="true" action="/">
                <input type="hidden" name="form-name" value="contact" />
                <input
                    className="contactForm__input SourceSansPro"
                    type="text"
                    name="senderName"
                    placeholder="votre nom & prenom"
                    required
                />
                <input
                    className="contactForm__input SourceSansPro"
                    type="email"
                    name="senderEmail"
                    placeholder="votre adresse email"
                    required
                />
                <textarea
                    className="contactForm__textarea SourceSansPro"
                    name="message"
                    placeholder="votre message"
                    required
                ></textarea>
                <div className="contactForm__consent">
                    <input
                        className="contactForm__consentOriginalCheckbox"
                        type="checkbox"
                        name="dataConsent"
                        id="dataConsent"
                        required
                    />
                    <span className="contactForm__consentCheckbox"></span>
                    <label
                        className="contactForm__consentLabel"
                        htmlFor="dataConsent"
                    >
                        En validant ce formulaire j'accepte que les informations
                        saisies soit enregistrés par Fayçal HAMMOUDI et utilisés
                        pour me recontacter. En aucun cas ces informations ne
                        seront vendus où cédées (c'est promis).
                    </label>
                </div>
                <div className="contactForm_submitGroup">
                    <input
                        className="contactForm__submit SourceSansPro"
                        type="submit"
                    />
                    <span className="contactForm__alert"></span>
                </div>
            </form>
        </section>
    );
};

export default Contact;
