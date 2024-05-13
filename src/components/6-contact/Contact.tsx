import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import DonaAnimation from "../../../public/animations/done.json";
import Contactanimation from "../../../public/animations/contact.json";
import "./contact.scss";

function Contact() {
  const form = useRef();
  const [isAlert, setAlert] = useState(false);
  const handleAlert = () => {
    const name = document.getElementById("name") as HTMLInputElement | null;
    const email = document.getElementById("email") as HTMLInputElement | null;
    const message = document.getElementById(
      "message"
    ) as HTMLInputElement | null;
    if (name.value !== "" && email.value !== "" && message.value !== "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 4000);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xbw7xvx",
        "template_x1ohdje",
        form.current,
        "X1Cf5ovioyGwNMk3Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="section-contact style flex" id="contact">
      <div className="form flex">
        <h2 className="title">Contactez-moi</h2>
        <p className="text-contat">
          N'hésitez pas à me contacter, je vous répondrai dans 24h.
        </p>
        <form ref={form} onSubmit={sendEmail} className="form-contact flex">
          <input
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
          <textarea
            name="message"
            placeholder="Votre message*"
            id="message"
            required
          />
          <div className="container-send">
            {isAlert && (
              <p className="message-confirm flex">
                Message bien envoyé
                <Lottie
                  className="lottie-ok"
                  loop={true}
                  animationData={DonaAnimation}
                />
              </p>
            )}
            <button onClick={handleAlert} type="submit" className="btn-contact">
              Envoyer
            </button>
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
        <Lottie
          className="animation-contact"
          animationData={Contactanimation}
        />
      </div>
    </section>
  );
}

export default Contact;
