import {useState}  from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";

function Contact() {
  const [state, handleSubmit] = useForm("xzbnwpzl");
  const [isAlert, setAlert] = useState(false);
  const handleAlert = () =>{
        setAlert(true);
        setTimeout(() => {
            setAlert(false);}, 400);
        }
    
  
  return (
    <section className="section-contact style flex" id="contact">
      <div className="form flex">
        <h2 className="title">Contactez-moi</h2>
        <p className="text-contat">
          N'hésitez pas à me contacter, je vous répondrai dans 24h.
        </p>

        {/* <form ref={form} onSubmit={sendEmail} className="form-contact "> */}
        <form onSubmit={handleSubmit} className="form-contact flex">
          <input
            type="text"
            id="name"
            placeholder="votre nom*"
            name="user_name"
            required
          />

          <input
            type="email"
            id="email"
            placeholder="Votre email*"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            placeholder="Votre message*"
            id="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="container-send">
            {/* {isAlert && <p className="message-confirm">message bien envoyé</p>} */}
            {/* <p className="message-confirm">message bien envoyé</p> */}
            {/* <button onClick={handleAlert} type="submit" className="btn-message"> */}
            <button
            onSubmit={handleAlert}
              type="submit"
              disabled={state.submitting}
              className="btn-contact"
            >
              {state.submitting ? "Envoi..." : "Envoyer"}
              
            </button>
            { /* ======Message to send======== */ }

            { state.succeeded && setAlert && (<p className="message-confirm">message bien envoyé  ✅ </p>)
              
            }
          </div>
          <p className="info-form">* Champ obligatoire</p>
        </form>
      </div>

      <div className="contact flex">
        <a href="tel:+33622464454">
          <i className="fa-solid fa-phone"> </i>: 0622464454
        </a>
        <a href="mailto:ahhouda@yahoo.fr">
          <i className="fa-solid fa-envelope"></i>: ahhouda@yahoo.fr
        </a>
        <a href="https://www.linkedin.com/in/houda-ben-abdallah-developpeuse-web/">
          <i className="fa-brands fa-linkedin"></i>: Linkedin
        </a>
      </div>
    </section>
  );
}

export default Contact;
