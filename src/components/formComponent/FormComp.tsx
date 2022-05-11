import { Button, Form, TextArea, TextInput } from "carbon-components-react";
import emailjs from "emailjs-com";
interface Props {
  isFrenchToggled: boolean;
}
export const FormComp = ({ isFrenchToggled }: Props) => {
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
          helperText={
            isFrenchToggled
              ? "Veuillez taper votre nom"
              : "Please type your name"
          }
          id="test2"
          invalidText={isFrenchToggled ? "Aucun nom saisi" : "No name entered"}
          labelText={isFrenchToggled ? "Votre nom" : "Name"}
          placeholder={isFrenchToggled ? "Votre nom" : "Your name"}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextInput
          name="last_name"
          helperText={
            isFrenchToggled
              ? "Veuillez entrer votre nom de famille"
              : "Please type your last name"
          }
          id="test2"
          invalidText={isFrenchToggled ? "Aucun nom saisi" : "No name entered"}
          labelText={isFrenchToggled ? "Nom de famille" : "Last Name"}
          placeholder={isFrenchToggled ? "Nom de famille" : "Last Name"}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextArea
          name="message"
          cols={50}
          helperText={
            isFrenchToggled
              ? "(~100 caractères maximum)"
              : "(~100 character count maximum)"
          }
          id="test5"
          invalidText={
            isFrenchToggled
              ? "Message d'erreur invalide."
              : "Invalid error message."
          }
          labelText="Message"
          placeholder={
            isFrenchToggled
              ? "S'il vous plaît, laissez votre message"
              : "Please, leave your message"
          }
          rows={4}
        />
      </div>

      <Button
        style={{ float: "left" }}
        kind="primary"
        tabIndex={0}
        type="submit"
      >
        {isFrenchToggled ? "Envoyer" : "Submit"}
      </Button>
      <br />
    </Form>
  );
};
