import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../App";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const apiUrl = useContext(ApiContext);

  useEffect(() => {
    fetch(`${apiUrl}/contact/`)  
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error("Error fetching contacts:", error));
  }, [apiUrl]);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
              {contact.firstName} {contact.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;