import React from "react";

function handleClose(onClose) {
    onClose();
}

export default function User({ user, visiblee, onClose}) {

    if (!visiblee) return null;

    return(
        <div className=" fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center" onClick={onClose}>
            
            <div className=" flex flex-col rounded-lg items-center justify-center shadow-lg h-1/2 w-1/2 bg-white">
                <div className=" flex w-full justify-end">
                    <button className="right-0 h-10 w-10 bg-red-400 hover:bg-red-700 hover:text-white m-4 rounded-lg text-gray-900" onClick={onClose}>X</button>
                </div>
                <div className="flex-grow flex flex-col w-full justify-center items-center">
                    <div className="bg-hero h-20 w-20 rounded-full bg-green-200"></div>
                    <div className="name">Diallo</div>
                    <div className="handle">@sorydi3</div>
                </div>
            </div>
            
        </div>
    );
}