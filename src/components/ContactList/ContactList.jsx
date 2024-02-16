import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { getContact } from "../redux/selectors";

export const ContactList = ({ onDelete }) => {
  const contacts = useSelector(getContact);

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

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
