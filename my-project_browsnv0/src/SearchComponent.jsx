import React from "react";

export default function SearchComponent({ onSearch }) {
    return (
        <div className="search rounded-lg p-5 w-full">
            <input
                className="w-full h-full py-5 px-3 rounded-lg bg-gray-200"
                type="text"
                placeholder="Search"
                onChange={(event) => onSearch(event.target.value)}
            />
        </div>
    );
}