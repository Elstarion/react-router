import { useState, createContext } from "react";
import Contact from "./Contact";
import "./Contacts.css";
import { Link } from "react-router-dom";

const contacts = [
  {
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    photo:
      "https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/16:9/w_1280,c_limit/wired-meme-nft-brian.jpg",
  },
  {
    id: 2,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    photo: "https://pbs.twimg.com/media/Ez6gSx8WYAI_dk1.jpg:large",
  },
  {
    id: 3,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    photo: "https://m.media-amazon.com/images/I/71zTE0u2iXL._AC_UY1100_.jpg",
  },
  {
    id: 4,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    photo: "https://www.famousbirthdays.com/faces/buckingham-lilia-image.jpg",
  },
  {
    id: 5,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    photo: "https://onlineforlove.com/wp-content/uploads/2020/04/image-678.jpg",
  },
  {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/President_Roosevelt_-_Pach_Bros_%28cropped%29.jpg",
  },
];

export const contactsContext = createContext(contacts);

export const Contacts = () => {
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState(["male", "female", "n/a"]);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleGenderChange(e) {
    const gender = e.target.name;
    if (e.target.checked) {
      setGenderFilter((prevState) => [...prevState, gender]);
    } else {
      setGenderFilter((prevState) =>
        prevState.filter((filteredGender) => filteredGender !== gender)
      );
    }
  }

  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    const searchFilter =
      fullName.includes(search.toLowerCase()) || contact.phone.includes(search);
    const genderCheck = genderFilter.includes(contact.gender);

    return !contact.gender && genderFilter.includes("n/a")
      ? contact && searchFilter
      : searchFilter && genderCheck;
  });

  return (
    <>
      <div className="searchPanel">
        <label>
          Find contact: <input value={search} onChange={handleSearchChange} />
        </label>

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              name="male"
              defaultChecked
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="checkbox"
              name="female"
              defaultChecked
              onChange={handleGenderChange}
            />
            Female
          </label>
          <label>
            <input
              type="checkbox"
              name="n/a"
              defaultChecked
              onChange={handleGenderChange}
            />
            N/A
          </label>
        </div>
      </div>

      <div className="contacts">
        {filteredContacts.map((contact) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`${contact.id}`}
            key={contact.id}
          >
            <Contact
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
              gender={contact.gender}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
