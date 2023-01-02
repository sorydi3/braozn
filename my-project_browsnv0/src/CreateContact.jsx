import React, { useEffect } from 'react';
import { useState } from 'react';


function LabelInput(props) {
    return (
        <div className='grid grid-rows-1 gap-1'>
            <label className='text-gray-700'> {props.label}</label>
            <input type={props.type} name={props.name} onChange={(even) => props.onChange(even.target.value)} className="focus:ring-green-400 appearance-none focus:outline-none placeholder-slate-400 ring-sky-300 px-10 rounded-t-lg focus:border-blue-800 border-t-0 border-l-0 border-r-0 bg-gray-200 shadow-lg" placeholder={props.label} />
        </div>
    );
}



function CreateContact(props) {
    const [nom, setNom] = useState("");
    const [telefon, setTelefon] = useState("");
    const [email, setEmail] = useState("");
    const [handle, setHandle] = useState("");

    const disableButton = nom === "" || handle === "" || telefon === "" || email === "";
    console.log(disableButton);


    const postContact = async () => {
        const response = await fetch('http://localhost:8080/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nom,
                handle: handle,
                telefoon: telefon,
                email: email
            })
        });
        const data = await response.json();
        console.log(data);
    }


    useEffect(() => {
        console.log(nom);
        console.log(telefon);
        console.log(email);
        console.log(handle);
    }, [nom, handle, telefon, email]);

    if (!props.visible) return null;

    return (
    <div className= "modal fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
        <div className="modal-content flex bg-white p-2 rounded-lg shadow-lg ">
            <div className='grid grid-cols-1'>
                <div className='h-28 w-28 bg-amber-500 m-auto rounded-full shadow-lg'></div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-between gap-5 m-5 justify-items-center content-center">
                    <LabelInput label="Nom" name="nom" type="text" onChange={setNom}/>
                    <LabelInput label="Telèfon" name="telefon" type="tel" onChange={setTelefon}/>
                    <LabelInput label="Email" name="email" type="email" onChange={setEmail}/>
                    <LabelInput label="handle" name="handle" type="text" onChange={setHandle}/>
                    <button className={!disableButton ? "bg-amber-500 hover:bg-amber-700 text-white font-bold m-5 py-2 px-4 rounded" : "hidden"}  name='button' onClick={() => postContact()}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>

    </div>);
}

export default CreateContact;