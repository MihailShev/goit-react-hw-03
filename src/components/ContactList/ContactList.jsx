// import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, onClick }) {
  return (
    <div>
      <Contact contacts={contacts} onClick={onClick} />
    </div>
  );
}

export default ContactList;
