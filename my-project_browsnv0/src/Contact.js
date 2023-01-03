import React, { useEffect, useState } from "react";
import Contacts from "./datacontacts";
import ListContact from "./ListContact";
import SearchComponent from "./SearchComponent";
import DetailsModal from "./DetailsModal";
import CreateContact from "./CreateContact";

function SearchFilter(setContacts, search, contacts, setFiltered) {
  if (search === "") {
    setContacts(contacts);
    setFiltered([]);
  } else {
    let filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(search.toLowerCase());
    });
    setFiltered(filteredContacts);
    return filteredContacts;
  }
}

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);
  const [search, setSearch] = useState("");
  const handleOnClose = () => setVisible(false);
  const handleOnOpen = () => setVisible(true);
  const [contacts, setContacts] = useState(Contacts);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    SearchFilter(setContacts, search, contacts, setFiltered);
  }, [search]);

  const handleOnCloseContact = () => {
    setVisibleForm(false)
    
  };
  /* Fetch Contacts */

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:8080/contacts");
    const data = await res.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };
    getContacts();
  }, []);

  function onRemoveContact(id) {
    setContacts(contacts.filter((c) => c.id !== id));
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-screen w-screen flex flex-col bg-slate-100 relative">
        <div className="flex">
          <SearchComponent onSearch={setSearch} />
          <button
            className="bg-blue-600 hover:bg-blue-400 text-white rounded-lg font-bold flex-shrink-0 w-20 h-10 m-auto mr-2"
            onClick={() => setVisibleForm(true)}
          >
            + add
          </button>
        </div>

        <div className="flex justify-center items-center ">
          {search !== "" ? (
            <p>
              Now showing {filtered.length} of {contacts.length}.
              <button
                className="bg-inherit text-sky-500 ml-2 underline"
                onClick={() => setSearch("")}
              >
                {" "}
                View all
              </button>
            </p>
          ) : (
            <p> Now showing {contacts.length} contacts.</p>
          )}
        </div>

        <ListContact
          contacts={search === "" ? contacts : filtered}
          onOpenModal={handleOnOpen}
          onRemoveContact={onRemoveContact}
        />
      </div>
      <DetailsModal visiblee={visible} onClose={handleOnClose} />
      <CreateContact visible={visibleForm} onClose={handleOnCloseContact} />
    </div>
  );
}
