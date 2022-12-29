import React from "react";

export default function SearchComponent({ onSearch }) {
    return (
        <div className="search rounded-lg p-5 w-full">
        <form className="group relative">
            <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-300" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>

            <input
                className="w-full h-full py-5 focus:ring-2 appearance-none focus:outline-none placeholder-slate-400 ring-sky-300 px-10 rounded-lg focus:border-blue-800 bg-gray-200 shadow-lg"
                type="text"
                placeholder="Search ..."
                aria-label="Filter projects"
                onChange={(event) => onSearch(event.target.value)}
            />
        </form>

        </div>
    );
}