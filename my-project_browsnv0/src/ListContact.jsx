import React from "react";
import PropTypes from "prop-types";

export default function ListContact({contacts,onOpenModal,onRemoveContact}) {
    
    return(
        <div className="contact-list selection:flex flex-col flex-grow justify-center items-center" >
            <ol className=" px-10 ">
                {contacts.map((contact,keys) => 
                    (<li key={keys} className=" grid grid-cols-[auto,auto]  my-3  bg-slate-200 rounded-lg shadow-lg hover:scale-105 items-center px-2">
                      
                       <div className="flex items-center">
                            <div className="bg-hero flex-shrink-0 bg-cover h-16 w-16 rounded-full bg-green-300 m-2 "></div>

                            <div className=" w-1 ml-4 h-13 my-3  bg-amber-300 rounded-lg"></div>

                            

                            <div className="grid divide-x-2 divide-red-400 justify-end ">
                                <div className="contact-list-item-info sm:text-ellipsis ">{contact.name}</div>

                                <div className="contact-list-item-info px-2 ml-2 ">{contact.handle}</div>
                            </div>
                       </div>
                        <button className="ml-auto h-10 w-20 bg-red-400 hover:bg-red-700 hover:text-white   rounded-lg text-gray-900 " onClick={ () => onRemoveContact(contact.id)} >Remove</button>
                    </li>)
                )}
            </ol>
        </div>
        
    );
}


// PropTypes is a library that helps us to validate the props that we are passing to our components are correct.
ListContact.propTypes = {
    contacts: PropTypes.array.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    onRemoveContact: PropTypes.func.isRequired
}

/*
 <div className="inset-y-0 inset-x-32 absolute bg-slate-200" onClick={onOpenModal}></div>
 */