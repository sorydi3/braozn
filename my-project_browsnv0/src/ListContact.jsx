import React from "react";


export default function ListContact({ contacts, onEdit, onDelete }) {
    console.log(contacts);
    return(
        <div className="contact-list selection:flex flex-col justify-center items-center" >
            <ol className=" px-10 py-10">
                {contacts.map((contact) => 
                    (<li key={contact.id} className="h-20  relative my-5  bg-slate-200 rounded-lg shadow-lg">
                        
                        <div className="bg-['url(../public/logo192.png)'] bg-fixed left-0 inset-y-0 bg-cover h-15 w-16 rounded bg-green-300 m-2 absolute"></div>

                        <div className=" flex flex-row absolute left-20 inset-y-4 ml-5  w-20 h-13 ">
                            <div className="contact-list-item-info ">@{contact.name}</div>

                            <div className="contact-list-item-info ">{contact.handle}</div>
                        </div>
                        <button className="right-0 absolute mx-5 inset-y-5">Remove</button>
                        
                    </li>)
                )}
            </ol>
        </div>
        
    );
}