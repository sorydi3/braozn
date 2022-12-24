import React from "react";
import contacts from "./datacontacts";
import ListContact from "./ListContact";
import SearchComponent from "./SearchComponent"

export default function Contact() {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-100 relative">
      <SearchComponent/>
      <ListContact contacts={contacts} />
    </div>
  );
}


