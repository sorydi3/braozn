import React, { useEffect, useState } from "react";
import Contacts from "./datacontacts";
import ListContact from "./ListContact";
import SearchComponent from "./SearchComponent";
import DetailsModal from "./DetailsModal";

const CContacts = [
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "http://localhost:5001/karen.jpg",
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
];

function handleOnOpen(setVisible) {
  setVisible(true);
}

function SearchFilter(setContacts, search, contacts, setFiltered) {
  if (search === "") {
    setContacts(contacts);
  } else {
    console.log(search);

    let filteredContacts = contacts.filter((contact) => {
      console.log(contact);
      console.log(contact.name.toLowerCase());
      console.log(search.toLowerCase());
      return contact.name.toLowerCase().includes(search.toLowerCase());
    });

    setFiltered(filteredContacts);
    console.log("filteredContacts found: " + filteredContacts.length);
    return filteredContacts;
  }
}

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const handleOnClose = () => setVisible(false);
  const handleOnOpen = () => setVisible(true);
  const [contacts, setContacts] = useState(CContacts);
  let filteredContacts = [];
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    filteredContacts = SearchFilter(setContacts, search, contacts, setFiltered);
    
  }, [search]);

  console.log(filteredContacts);
  //console.log(search);

  function onRemoveContact(id) {
    setContacts(contacts.filter((c) => c.id !== id));
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-screen w-screen flex flex-col bg-slate-100 relative">
        <SearchComponent onSearch={setSearch} />
        <ListContact
          contacts={search === "" ? contacts : filtered}
          onOpenModal={handleOnOpen}
          onRemoveContact={onRemoveContact}
        />
      </div>
      <DetailsModal visiblee={visible} onClose={handleOnClose} />
    </div>
  );
}
