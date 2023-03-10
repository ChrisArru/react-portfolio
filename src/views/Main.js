import React from "react";
import style from "./Main.module.css";
import image from "../images/heroImage.jpeg";

const Main = () => {
  return (
    <section className={style["hero-jumbotron"]} id="home">
      <div class="container-fluid">
        <div class="row">
          {/* <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className={style["hero-text"]}>
              <h2 className={style["hero_title"]}>
                Hi, I'm Christian.
              </h2>
              <p className={style["hero_desc"]} >
                Front End Developer based in Turin, Italy.
              </p>
            </div>
          </div> */}
          <div class="jumbotron">
            <h1 class="display-4">Hello, world! I'm Christian.</h1>
            <p class="lead">Front End Developer based in Turin, Italy.</p>
            <hr class="my-4" />
            <p>
              <img src={image} style={{ width: "60%" }} alt="" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
