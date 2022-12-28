import React from "react";


function handleDelete(id) {
    console.log(id);
}

export default function ListContact({contacts,onOpenModal,onRemoveContact}) {
    
    return(
        <div className="contact-list selection:flex flex-col flex-grow justify-center items-center" >
            <ol className=" px-10 py-10">
                {contacts.map((contact,keys) => 
                    (<li key={keys} className="h-20  relative my-5 divide-x divide-solid  bg-slate-200 rounded-lg shadow-lg hover:scale-105">
                        <div className="inset-y-0 inset-x-32 absolute bg-slate-200" onClick={onOpenModal}></div>
                        <div className="bg-hero left-0 inset-y-0 bg-cover h-15 w-16 rounded-full bg-green-300 m-2 absolute"></div>

                        <div className="divider w-0.5 ml-1.5 h-13 absolute bg-slate-300 left-20 inset-y-4 rounded-lg"></div>

                        <div className=" flex flex-row absolute left-20 inset-y-4 ml-5  w-20 h-13 ">
                            <div className="contact-list-item-info ">@{contact.name}</div>

                            <div className="contact-list-item-info ">{contact.handle}</div>
                        </div>
                        <button className="right-0 absolute h-10 w-20 bg-red-400 hover:bg-red-700 hover:text-white  rounded-lg text-gray-900 mx-5 inset-y-5" onClick={ () => onRemoveContact(contact.id)} >Remove</button>
                    </li>)
                )}
            </ol>
        </div>
        
    );
}