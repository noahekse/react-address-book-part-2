import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import CreateContact from "./components/CreateContact";
import "./App.css";

export const ApiContext = createContext();
function App() {
  return (
    <ApiContext.Provider value="https://boolean-uk-api-server.fly.dev/noahekse">
      <Router>
        <nav>
          <Link to="/">Contacts List</Link> |
          <Link to="/create"> Create a contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/create" element={<CreateContact />} />
        </Routes>
      </Router>
    </ApiContext.Provider>
  );
}

export default App;
