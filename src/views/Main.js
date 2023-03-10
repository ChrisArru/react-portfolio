import React from "react";
import style from "./Main.module.css";

const Main = () => {
  return (
    <section className={style.bgimage} /* class="bgimage" */ id="home">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className={style["hero-text"]}>
              <h2 className={style["hero_title"]} /* class="hero_title" */>
                Hi, I'm Christian.
              </h2>
              <p className={style["hero_desc"]} /* class="hero_desc" */>
                Front End Developer based in Turin, Italy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
