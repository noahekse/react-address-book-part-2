import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../App";

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const apiUrl = useContext(ApiContext);

  useEffect(() => {
    fetch(`${apiUrl}/contact/${id}`)
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error("Error fetching contact:", error));
  }, [apiUrl, id]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
    </div>
  );
}

export default ContactDetails;