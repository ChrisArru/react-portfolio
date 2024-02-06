import React, { useRef, useState } from "react";

const Contact = () => {
  const nameInputRef = useRef();
  const subjectInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const mailFormat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [bodyIsValid, setBodyIsValid] = useState(false);
  const [formIsSubmited, setFormIsSubmited] = useState(false);

  const checkEmailValidity = () => {
    const email = emailInputRef.current.value;
    setEmailIsValid(email.toLowerCase().match(mailFormat));
  };

  const checkNameValidity = () => {
    const name = nameInputRef.current.value;
    setNameIsValid(name !== "");
  };

  const checkBodyValidity = () => {
    const body = messageInputRef.current.value;
    setBodyIsValid(body !== "");
  };

  const onSendEmailHandler = async (data) => {
    console.log(data);
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    /* setMessage(result.message);
    setShow(true); */
    console.log(result);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setFormIsSubmited(true);
    const name = nameInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;

    const data = {
      name,
      subject,
      email,
      message,
    };

    console.log(data);
    if (emailIsValid && nameIsValid && bodyIsValid) {
      /* onSendEmailHandler(data); */
      window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
    } else {
      console.error("Errore nel form");
    }
  };

  return (
    <section id="contact">
      <div class="container mt-3 contactContent reveal">
        <h1 class="display-4 text-center" style={{ marginBottom: "4rem" }}>
          Contact Me
        </h1>

        <div class="row justify-content-md-center">
          <div class="col-lg-6">
            <form className="needs-validation" onSubmit={onSubmitHandler}>
              <input
                ref={nameInputRef}
                id="nameRef"
                type="text"
                className={`form-control ${
                  nameIsValid ? "is-valid" : "is-invalid"
                }`}
                placeholder="Name"
                required
                onChange={checkNameValidity}
              />
              {formIsSubmited && !nameIsValid && (
                <div class="invalid-feedback">Please insert a name</div>
              )}

              <input
                ref={emailInputRef}
                id="emailRef"
                type="email"
                className={`form-control mt-3 ${
                  emailIsValid ? "is-valid" : "is-invalid"
                }`}
                placeholder="Email"
                onChange={checkEmailValidity}
                required
              />
              {formIsSubmited && !emailIsValid && (
                <div className="invalid-feedback" style={{ display: "block" }}>
                  Please insert a valid email
                </div>
              )}

              <input
                ref={subjectInputRef}
                id="subjectRef"
                type="text"
                className={"form-control mt-3"}
                placeholder="Subject"
                required
              />
              {/* <div class="invalid-feedback">Please insert a subject</div> */}

              <textarea
                ref={messageInputRef}
                id="messageRef"
                className={`form-control mt-3 ${
                  bodyIsValid ? "is-valid" : "is-invalid"
                }`}
                name="text"
                placeholder="Project Details"
                required
                onChange={checkBodyValidity}
              ></textarea>
              {formIsSubmited && !bodyIsValid && (
                <div class="invalid-feedback">Please insert a message</div>
              )}
            </form>

            <button
              onClick={onSubmitHandler}
              type="submit"
              class="btn btn-success mt-3"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
