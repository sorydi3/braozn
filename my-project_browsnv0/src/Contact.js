import React, { useState } from "react";
import contacts from "./datacontacts";
import ListContact from "./ListContact";
import SearchComponent from "./SearchComponent";
import DetailsModal from "./DetailsModal";

function handleOnOpen(setVisible) {
  setVisible(true);
}

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const handleOnClose = () => setVisible(false);
  const handleOnOpen = () => setVisible(true);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  //console.log(filteredContacts);
  //console.log(search);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-screen w-screen flex flex-col bg-slate-100 relative">
        <SearchComponent onSearch={setSearch} />
        <ListContact contacts={filteredContacts} onOpenModal={handleOnOpen} />
      </div>
      <DetailsModal visiblee={visible} onClose={handleOnClose} />
    </div>
  );
}
