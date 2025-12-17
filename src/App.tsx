import { useState } from "react";
import "./App.css";
import DisplayContacts from "./components/DisplayContacts/DisplayContacts";
import SearchContacts from "./components/SearchContacts/SearchContacts";
import AddContact from "./components/AddContact/AddContact";
import BulkDelete from "./components/BulkDelete/BulkDelete";
import ContactFormModal from "./components/ContactFormModal/ContactFormModal";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";
import { addContacts } from "./store/slices/contactsSlice";

function App() {
  const contacts = useSelector((state: RootState) => state.contacts.list);
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");
  const [valueEntered, setValueEntered] = useState("");
  // const [clicked, setClicked] = useState(false);
  const [addContact, setAddContact] = useState(false);
  const [bulkDelete, setBulkDelete] = useState(false);

  const filteredContacts = contacts.filter((c) =>
    `${c.fullName} ${c.email}`
      .toLowerCase()
      .includes(valueEntered.toLowerCase())
  );

  // const handleDeleteContact = (id: number) => {
  //   setContacts((prev) => prev.filter((contact) => contact.id !== id));
  // };

  return (
    <>
      <header className="header">
        <div className="ofbusiness">
          <h2 style={{ paddingLeft: 210 }}>Ofbusiness</h2>
        </div>
      </header>
      <div className="home">
        {/* Have to put this in header component later */}

        <div className="full-size">
          <h2 id="head">Contact Manager</h2>
          <div className="search-add">
            <div>
              <SearchContacts
                value={value}
                onChange={setValue}
                onEnter={() => setValueEntered(value)}
              />
            </div>
            {/* <div>
              <BulkDelete
                onClick={() => {
                  setBulkDelete(true);
                }}
              />
            </div> */}
            <div>
              <AddContact onClick={() => setAddContact(true)} />
              <ContactFormModal
                isOpen={addContact}
                onClose={() => setAddContact(false)}
                onAddContact={(contact) => {
                  dispatch(
                    addContacts({
                      ...contact,
                      id: Date.now(),
                    })
                  );
                  // setAddContactOpen(false);
                }}
              />
            </div>
          </div>
          <DisplayContacts />
        </div>
      </div>
    </>
  );
}

export default App;
