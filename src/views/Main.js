import React, { useState, useEffect, useMemo } from "react";
import style from "./Main.module.css";
import image from "../images/heroImage.jpg";

const Main = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const isRowVisible = useMemo(() => screenSize.width > 600, [screenSize]);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

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
          <div id="test" class="jumbotron">
            <h1 className={`${style["hero-title"]} display-4`}>
              Hello, world! I'm Christian.
            </h1>
            <p className={`${style["hero-desc"]} lead`}>
              Front End Developer based in Turin, Italy.
            </p>
            {isRowVisible && (
              <hr class="my-4" style={{ display: "none !important" }} />
            )}
            <p className={style["little-img"]}>
              <img src={image} style={{ width: "60%" }} alt="" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
