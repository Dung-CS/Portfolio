import React, { useState } from "react";
import "./newContact.css";

const NewContact = () => {
  const [fill1, showFill1] = useState("");
  const [fill2, showFill2] = useState("");
  const [fill3, showFill3] = useState("");
  const [fill4, showFill4] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    setSubmit(true);
    e.preventDefault;
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything</h3>
          <p className="contact_details">Don't like forms? Send me an email.</p>
        </div>

        <form action="" onSubmit={handleSubmit} className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                id="name"
                value={fill1}
                onChange={(e) => {
                  showFill1(e.target.value);
                }}
                type="text"
                className={submit ? "dis_none" : "contact_form-input"}
                placeholder="Insert your name"
                required
              ></input>
              <p className={submit ? "contact_form-input" : "dis_none"}>
                {fill1}
              </p>
            </div>
            <div className="contact_form-div">
              <input
                type="email"
                value={fill2}
                onChange={(e) => {
                  showFill2(e.target.value);
                }}
                className={submit ? "dis_none" : "contact_form-input"}
                placeholder="Insert your email"
                required
              ></input>
              <p className={submit ? "contact_form-input" : "dis_none"}>
                {fill2}
              </p>
            </div>
          </div>
          <div className="contact_form-div">
            <input
              type="text"
              value={fill3}
              onChange={(e) => {
                showFill3(e.target.value);
              }}
              className={submit ? "dis_none" : "contact_form-input"}
              placeholder="Insert your subject"
              required
            />
            <p className={submit ? "contact_form-input" : "dis_none"}>
              {fill4}
            </p>
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={fill4}
              onChange={(e) => {
                showFill4(e.target.value);
              }}
              className={submit ? "dis_none" : "contact_form-input"}
              placeholder="Write your message"
              required
            ></textarea>
            <p className={submit ? "contact_form-input" : "dis_none"}>
              {fill4}
            </p>
          </div>
          <button type="submit" className={submit ? "dis_none" : "btn"}>
            Send Message
          </button>
          <p className={submit ? "" : "dis_none"}>
            Message sent! Thank you for your comment.
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewContact;
