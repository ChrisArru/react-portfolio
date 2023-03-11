import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVuejs,
  faReact,
  faAngular,
  faHtml5,
  faCss3,
  faJava,
  faJs,
  faNodeJs,
  faGit,
  faDocker,
  faJenkins,
} from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <section id="services">
      <div class="container">
        <h1 class="display-4 text-center" style={{ marginBottom: "4rem" }}>
          Languages I speak
        </h1>
        <div class="row">
          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faReact} style={{ height: "100px" }} />
          </div>
          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faAngular} style={{ height: "100px" }} />
          </div>

          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faVuejs} style={{ height: "100px" }} />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faHtml5} style={{ height: "100px" }} />
          </div>

          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faCss3} style={{ height: "100px" }} />
          </div>

          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faJs} style={{ height: "100px" }} />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faJava} style={{ height: "100px" }} />
          </div>

          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faNodeJs} style={{ height: "100px" }} />
          </div>

          <div class="col-lg-4 mt-4">
            <FontAwesomeIcon icon={faGit} style={{ height: "100px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
