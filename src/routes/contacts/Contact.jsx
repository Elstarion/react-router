import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faGhost,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ firstName, lastName, phone, gender }) => {
  let genderIcon = null;

  if (gender === "male") {
    genderIcon = (
      <FontAwesomeIcon icon={faMars} className="icon"></FontAwesomeIcon>
    );
  }
  if (gender === "female") {
    genderIcon = (
      <FontAwesomeIcon icon={faVenus} className="icon"></FontAwesomeIcon>
    );
  }
  if (!gender) {
    genderIcon = (
      <FontAwesomeIcon icon={faGhost} className="icon"></FontAwesomeIcon>
    );
  }

  return (
    <div className="contact-card">
      {genderIcon}
      <p>
        {firstName} {lastName}
      </p>
      <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
      <p>{phone}</p>
    </div>
  );
};

export default Contact;
