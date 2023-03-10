import React from "react";
import portfolioImage1 from "../images/portfolioImage1.jpg";
import portfolioImage2 from "../images/portfolioImage2.jpg";
import portfolioImage3 from "../images/portfolioImage3.jpg";
import portfolioImage4 from "../images/portfolioImage4.jpg";
import portfolioImage5 from "../images/portfolioImage4.jpg";
import portfolioImage6 from "../images/portfolioImage4.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div class="container mt-3">
        <h1 class="display-4 text-center">Portfolio</h1>
        <div class="row">
          <div class="col-lg-4 mt-4">
            <div class="card">
              <img
                class="card-img-top"
                src={portfolioImage1}
                alt="Card1"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">YouTube Clone</h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="text-center">
                  {/* <a href="#" class="btn btn-success">
                    Link
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mt-4">
            <div class="card portfolioContent">
              <img
                class="card-img-top"
                src={portfolioImage2}
                alt="Card2"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">Quiz App</h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="text-center">
                  {/* <a href="#" class="btn btn-success">
                    Link
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mt-4">
            <div class="card portfolioContent">
              <img
                class="card-img-top"
                src={portfolioImage3}
                alt="Card3"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">Product Landing Page</h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="text-center">
                  {/* <a href="#" class="btn btn-success">
                    Link
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4 mt-4">
            <div class="card portfolioContent">
              <img
                class="card-img-top"
                src={portfolioImage4}
                alt="Card4"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">Messaging Service</h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="text-center">
                  {/* <a href="#" class="btn btn-success">
                    Link
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mt-4">
            <div class="card portfolioContent">
              <img
                class="card-img-top"
                src={portfolioImage5}
                alt="Card5"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">Twitter Clone</h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="text-center">
                  {/* <a href="#" class="btn btn-success">
                    Link
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mt-4">
            <div class="card portfolioContent">
              <img
                class="card-img-top"
                src={portfolioImage6}
                alt="Card6"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">Blog App</h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="text-center">
                  {/* <a href="#" class="btn btn-success">
                    Link
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
