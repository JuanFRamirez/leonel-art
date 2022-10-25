import React from "react";
import { useState } from "react";
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(error);
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validateFormFields = () => {
    const { name, email, message } = form;
    if (!name | !email | !message) {
      setError(true);
    } else if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    validateFormFields();
  };
  return (
    <div className="contact">
      <form onSubmit={submitHandler}>
        nombre:
        <input type="text" name="name" onChange={formHandler} />
        email:
        <input type="email" name="email" onChange={formHandler} />
        message:
        <textarea name="message" onChange={formHandler} />
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default ContactForm;
