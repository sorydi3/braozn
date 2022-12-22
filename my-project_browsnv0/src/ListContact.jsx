import React from "react";


export default function ListContact({ contacts, onEdit, onDelete }) {
    console.log(contacts);
    return(
        <ol className="contact-list selection:flex flex-col justify-center items-center">
            {contacts.map((contact) => 
                (<li key={contact.id} className="contact-list-item flex flex-row justify-center items-center">{contact.name}</li>)
            )}
        </ol>
    );
}