// import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/Contact.Form";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import "./App.css";

export function App() {
  // const [contacts, setContacts] = useState(savedContacts);
  // const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const handleSearchChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleAddContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const deleteContact = (userId) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== userId)
  //   );
  // };

  // const searchedContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
