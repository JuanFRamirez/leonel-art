import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Subtitle from "./Subtitle";
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      if (validateEmail(form.email) !== null) {
        setError(false);
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Algunos campos presentan problemas o estan vacios, por favor verifiquelos e intente otra vez",
      });
      console.log(e.message);
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTimeout(() => {
      if (
        form.name.trim().length > 0 &&
        form.email.trim().length > 0 &&
        form.message.trim().length > 0
      ) {
        setIsDisabled(false);
      }
    }, 100);
  };
  return (
    <div className="contact">
      <Subtitle text={"Envia un mensaje"}/>
      <form onSubmit={submitHandler}>
        nombre:
        <input type="text" name="name" onChange={formHandler} required={true} />
        email:
        <input
          type="email"
          name="email"
          onChange={formHandler}
          required={true}
          className={error ? "error" : ""}
        />
        message:
        <textarea name="message" onChange={formHandler} required={true} />
        <button disabled={isDisabled}>Enviar</button>
      </form>
    </div>
  );
};
export default ContactForm;
