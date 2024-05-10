import {useState}  from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import "./contact.scss";
import DonaAnimation from '../../../public/animations/done.json';
import Contactanimation from '../../../public/animations/contact.json';

function Contact() {
  const [state, handleSubmit] = useForm("xzbnwpzl");
  
  return (
    <section className="section-contact style flex" id="contact">
      <div className="form flex">
        <h2 className="title">Contactez-moi</h2>
        <p className="text-contat">
          N'hésitez pas à me contacter, je vous répondrai dans 24h.
        </p>

        <form onSubmit={handleSubmit} className="form-contact flex">
          <input
            autoComplete="off"
            type="text"
            id="name"
            placeholder="votre nom*"
            name="user_name"
            required
          />

          <input
            autoComplete="off"
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
            <button
              type="submit"
              disabled={state.submitting}
              className="btn-contact"
            >
              {state.submitting ? "Envoi..." : "Envoyer"}
              
            </button>
            { /* ======Message to send======== */ }

            { state.succeeded && (<p className="message-confirm flex">Message bien envoyé 
            <Lottie loop={false} style={{height:40}} animationData = {DonaAnimation} />
            </p>)
              
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
        <Lottie className="animation-contact" animationData = {Contactanimation} />
      </div>
    </section>
  );
}

export default Contact;
