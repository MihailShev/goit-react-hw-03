import css from "./Contact.module.css";
import { IoPerson, IoCallSharp } from "react-icons/io5";

function Contact({ contacts, onClick }) {
  return (
    <ul className={css.list_contact}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item_contact} key={id}>
          <div className={css.main_container}>
            <div className={css.container}>
              <IoPerson className={css.svg} size={15} />
              <h2 className={css.title}>{name}</h2>
            </div>

            <div className={css.container}>
              <IoCallSharp className={css.svg} size={15} />
              <p className={css.number}>{number}</p>
            </div>
          </div>

          <button
            onClick={() => onClick(id)}
            className={css.button}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contact;
