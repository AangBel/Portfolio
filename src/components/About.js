import React from "react";
import framedProfilePhoto from "../components/Images/framedProfilePhoto.svg";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="aboutMe">
            About Me
          </h2>
          <p className="pAbout">
            In the last year I transitioned from working as a Child Protection
            and Children's Mental Health Social Worker to obtaining a
            certification in Full Stack Engineering through Prime Digital
            Academy.
            <br />
            <br />
            Although, I've just begun, I have always had an affinity for
            technology, an affinity for breaking things and learning how to fix
            them.
          </p>
          <p className="pAbout">
            <br />
            Recent repairs outside of code:
            <br />
            -Learning to take apart a car 🚗 door in order to fix a broken
            window mechanism.
            <br />
            -Using the library's free 3-D printer in order to repair headphones
            🎧 I paid way too much for.
          </p>

          <br />

          <p className="pAbout">
            In my spare time I enjoy video games, learning to draw, reading,
            puzzles and hanging out with friends.
          </p>
          <br />
          <p className="pAbout">
            SOFTWARE DEVELOPMENT SKILLS HTML5, CSS, Material UI, Tailwind,
            JavaScript, jQuery, Node.js, Day.js, Express, Ajax, JSON, SQL,
            PostgreSQL, ReactJS, Redux, API. <br />
            ADDITIONAL SKILLS Proficiency in Microsoft Office Suite, Adobe
            suite, Google Workspace, GitHub, NPM, Figma, Canva, Squarespace,
            Google Sites, Heroku, Neon, Postman, shared link applications, and
            video conference software.
          </p>
          <br />
        </div>
        <div className="about-img">
          <img
            src={framedProfilePhoto}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
