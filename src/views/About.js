import React from "react";
import image from "../images/about.jpeg";
import style from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={style.about}>
      <div class="container mt-4 pt-4">
        <h1 class="text-center" style={{ marginBottom: "4rem" }}>
          Nice to meet you. Something about me.
        </h1>
        <div class="row mt-4">
          <div class="col-lg-4">
            <img src={image} className={style["imageAboutPage"]} alt="" />
          </div>

          <div class="col-lg-8">
            <div class="row mt-3">
              <p>
                {" "}
                I'm Christian Arruzza and I'm a Front End Developer since 2013.
                I really love my job and I try to learn every day something new.
                I started with plain HTML, Javascript and CSS, then I move
                forward learning Vue js, Angular and React. I'm curios,
                passionate, precise in my work and I love working in team.
              </p>
            </div>
            {/* <div class="row mt-3">
              <div class="col-md-6">
                <ul>
                  <li>Name: David Parker</li>
                  <li>Age: 28</li>
                  <li>Occupation: Web Developer</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>Name: David Parker</li>
                  <li>Age: 28</li>
                  <li>Occupation: Web Developer</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
