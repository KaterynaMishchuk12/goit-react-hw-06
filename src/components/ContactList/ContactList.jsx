import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { getContact, getFilter } from "../redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const searchedContacts = filter
    ? contacts.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts.contacts;

  return (
    <div>
      <ul>
        {console.log(searchedContacts)}
        {searchedContacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            // onDelete={handleDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

// Contact.jsx
// import { BiSolidUser } from "react-icons/bi";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import css from "./Contact.module.css";
// import { deleteContact } from "../redux/contactsSlice";
// import { useDispatch } from "react-redux";

// export const Contact = ({ name, number, id }) => {
//   const dispatch = useDispatch();
//   const handleDeleteContact = (contactId) => dispatch(deleteContact(contactId));

//   return (
//     <li key={id}>
//       <div className={css.container}>
//         <div className={css.contactInfo}>
//           <p>
//             <BiSolidUser className={css.icon} />
//             {name}
//           </p>
//           <p>
//             <BsFillTelephoneFill className={css.icon} />
//             {number}
//           </p>
//         </div>
//         <button type="button" onClick={() => handleDeleteContact(id)}>
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// };
