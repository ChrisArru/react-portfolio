import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import style from "./Work.module.css";
import {
  faAngleDoubleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  return (
    <section id="work">
      <div class="container">
        <h1 class="display-4 text-center" style={{ marginBottom: "4rem" }}>
          Where I've worked
        </h1>
        <div class="row justify-content-md-center">
          <div
            style={{ justifyContent: "center" }}
            class="d-flex align-items-start"
          >
            <div
              class="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                ATS - Advanced Technology Solutions
              </button>
              <button
                class="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Comau - Digital Area
              </button>

              <button
                class="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Comau - Robotics Area
              </button>
            </div>
            <div
              style={{ width: "100%" }}
              class="tab-content"
              id="v-pills-tabContent"
            >
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabindex="0"
              >
                <p class="lead">
                  Front End Developer{" "}
                  <cite className={style.company} title="Source Title">
                    @ATS
                  </cite>
                </p>
                <ul className="fa-ul">
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Write modern, performant, maintainable code for a diverse
                      array of clients from the banking sector.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Work with a variety of different languages, platforms,
                      frameworks such as JavaScript, TypeScript, React, Docker,
                      Java Spring.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Communicate with engineers, designers and analysts on a
                      daily basis.
                    </p>
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabindex="0"
              >
                <p class="lead">
                  Front End Developer{" "}
                  <cite className={style.company} title="Source Title">
                    @Comau Digital Area
                  </cite>
                </p>
                <ul className="fa-ul">
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Responsable of mantaining and develop new features of a
                      internal product: a MES SPA Web Page for the automotive
                      sector.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Work with a variety of different languages, platforms,
                      frameworks such as JavaScript, TypeScript, Angular,
                      Docker, Java Spring, Jenkins.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Agile Scrum methodology adopted with a multi-cultural
                      teams of engineers (from India and USA) with daily
                      stand-up meeting, retrospective meeting and Sprint Review
                      with customers and stakeholders every 3-4 weeks.
                    </p>
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabindex="0"
              >
                <p class="lead">
                  Front End Developer and Application Specialist{" "}
                  <cite className={style.company} title="Source Title">
                    @Comau Robotics Engineering
                  </cite>
                </p>
                <ul className="fa-ul">
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Write code UI and business logic for different customers
                      in the automotive sectors and for various R&D internal
                      projects
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Technical Expert of two automotive applications: from the
                      design to the delivering of the software
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAngleDoubleRight} listItem />
                    <p class="lead">
                      Communicate with multi-disciplinary and multi-cultural
                      teams of engineers, designers, producers, suppliers and
                      clients on a daily basis
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
