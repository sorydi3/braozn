import React from 'react';
import PropTypes from 'prop-types';

export default function NavBar({onOpenModal}) {
    return (
        <div className="navbar flex  bg-red-400 scro fixed w-full z-10 justify-between items-center px-10 py-4">
            <div className="logo">
                <img src="https://www.freepnglogos.com/uploads/red-logo-png-23.png" alt="logo" className="h-8 w-8" />
            </div>
            <div className="buttons">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onOpenModal}>
                    New Contact
                </button>
            </div>
        </div>
    );
}


//