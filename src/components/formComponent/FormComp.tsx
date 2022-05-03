import { Button, Form, TextArea, TextInput } from "carbon-components-react";
import React, { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";

export const FormComp = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c7ms675",
        "template_KH2WrD2t",
        e.target,
        "user_CJZgaIrB2PrfSnYBMoukb"
      )
      .then(
        (res) => console.log(res.text),
        (error) => console.log(error.tex)
      );
    e.target.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <div style={{ marginBottom: "2rem" }}>
        <TextInput
          name="first_name"
          helperText="Please type your name"
          id="test2"
          invalidText="No name entered"
          labelText="Name"
          placeholder="Your name"
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextInput
          name="last_name"
          helperText="Please type your last name"
          id="test2"
          invalidText="No name entered"
          labelText="Last Name"
          placeholder="Last Name"
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextArea
          name="message"
          cols={50}
          helperText="(~100 character count maximum)"
          id="test5"
          invalidText="Invalid error message."
          labelText="Message"
          placeholder="Please, leave your message"
          rows={4}
        />
      </div>

      <Button
        style={{ float: "left" }}
        kind="primary"
        tabIndex={0}
        type="submit"
      >
        Submit
      </Button>
      <br />
    </Form>
  );
};
