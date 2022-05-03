import { Button, Form, TextArea, TextInput } from "carbon-components-react";
import React, { FormEvent, useState } from "react";

export const FormComp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const [formInfo, setFormInfo] = useState({
    name: "",
    lastName: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
  };

  
  return (
    <Form onSubmit={onSubmit}>
      <div style={{ marginBottom: "2rem" }}>
        <TextInput
          helperText="Please type your name"
          id="test2"
          invalidText="No name entered"
          labelText="Name"
          placeholder="Your name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextInput
          helperText="Please type your last name"
          id="test2"
          invalidText="No name entered"
          labelText="Last Name"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextArea
          cols={50}
          helperText="(~100 character count maximum)"
          id="test5"
          invalidText="Invalid error message."
          labelText="Message"
          placeholder="Please, leave your message"
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
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
