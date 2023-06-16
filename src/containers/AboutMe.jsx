import React from "react";
import '../styles/aboutMe.css'

const AboutMe = () => {
  return (
    <div className="divPrimary-aboutMe">
      <section className="sectionInfo-aboutMe">
        <section className="sectionImg-aboutMe">
          <img src="../../public/img/Acerca-de.jpeg" alt="Imagen de la autora" />
        </section>
        <section className="sectionInfo">
          <p>Actualmente rediseño y programo nuevos proyectos y sitios de aplicaciones web, ya sea del lado del cliente (Front-end) como del lado del servidor (Back-end).

            Continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general.

            Apasionada con el trabajo que realizo, ofreciendo y aportando mis conocimientos, habilidades y experiencia, así como nuevas ideas, soluciones y seguimiento de calidad al cliente y su objetivo en cada proyecto.</p>
        </section>
      </section>
    </div>
  );
}

export default AboutMe;