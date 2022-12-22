import React from "react";
import contacts from "./datacontacts";
import ListContact from "./ListContact";

export default function Contact() {
  return (
    <div className="h-screen w-screen bg-slate-100 relative">
      <ListContact contacts={contacts} />
    </div>
  );
}
