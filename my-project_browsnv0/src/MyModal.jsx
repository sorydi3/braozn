import React from 'react';

export default function MyModal({visible, onClose}) {

    if (!visible) return null;

  return (
    <div onClick={onClose} className="modal fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
      <div className="modal-content bg-white p-2 rounded-lg shadow-lg">
        <p className='m-5'>Las dades s'han guardad correctament!</p>
        <button onClick={onClose} className="bg-amber-500 hover:bg-amber-700 text-white font-bold m-5 py-2 px-4 rounded">
            Tancar
        </button>
      </div>
    </div>
  );
}