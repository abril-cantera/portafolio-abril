import React from "react";
import '../styles/contact.css'
import { BsGithub } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className="divPrincipal-contact">
      <section className="sectionContainer">
        <section >
          <BsGithub className="containerIcon" />
        </section>
        <section>
          <BsWhatsapp className="containerIcon" />
        </section>
        <section>
          <BsInstagram className="containerIcon" />
        </section>
      </section>
    </div>
  );
}

export default Contact;