import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div class="container mt-3 contactContent reveal">
        <h1 class="display-4 text-center" style={{ marginBottom: "4rem" }}>
          Contact Me
        </h1>

        <div class="row justify-content-md-center">
          <div class="col-lg-6">
            <form>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Name"
              />
              <input
                type="email"
                class="form-control mt-3"
                placeholder="Email"
              />
              <input
                type="text"
                class="form-control mt-3"
                placeholder="Subject"
              />
              <div class="mb-3 mt-3">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  name="text"
                  placeholder="Project Details"
                ></textarea>
              </div>
            </form>
            <button type="button" class="btn btn-success mt-3">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
