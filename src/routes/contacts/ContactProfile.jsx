import { useParams } from "react-router-dom";
import { useContext } from "react";
import { contactsContext } from "./Contacts";

const ContactProfile = () => {
  let params = useParams();
  const contacts = useContext(contactsContext);
  return (
    <div className="contact-profile">
      <div className="profile-data">
        <img
          src={contacts[params.contactId - 1].photo}
          className="profile-photo"
        />
        <h1>
          {contacts[params.contactId - 1].firstName}{" "}
          {contacts[params.contactId - 1].lastName}
        </h1>
        <h2>Phone: {contacts[params.contactId - 1].phone}</h2>
      </div>

      <div className="message-box">
        <p className="bubble right">Hello world!</p>
        <p className="bubble left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          consequuntur amet cum. Cupiditate, ratione provident.
        </p>
        <p className="bubble right">
          Illo debitis quos porro labore voluptas veniam incidunt quisquam.
        </p>
        <p className="bubble left">
          Eveniet deserunt distinctio eaque dem quos?
        </p>
        <p className="bubble right">
          Maiores suscipit eaque in voluptas amet, quae impedit animi est fugiat
          error cumque!
        </p>
        <p className="bubble left">Commodi perspiciatis quos</p>
        <p className="bubble left">
          Aperiam velit voluptatem aspernatur dolor!
        </p>
        <p className="bubble left">
          Facilis voluptatum, maxime voluptas architecto
        </p>
        <p className="bubble right">
          Vel pariatur deleniti deserunt ipsam perspiciatis veniam maxime a
          rerum, quaerat ex est soluta dolores maiores blanditiis
        </p>
        <p className="bubble left">Sint harum molestias quis</p>
      </div>
    </div>
  );
};

export default ContactProfile;
