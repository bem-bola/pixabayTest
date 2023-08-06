import React from 'react'

const Form = ({searchImage, query, changeHandler, action=null}) =>{
  return (
    <div className="px-2 py-2 w-full">
        <form onSubmit={searchImage} action={action}>
        <div className="w-full">
            <div className="flex space-x-4">
            <div className="flex rounded-md overflow-hidden w-full">
                <input
                type="text"
                className="w-full rounded-md rounded-r-none pl-3"
                placeholder='Mot(s) clé(s)'
                name="query"
                value={query} onChange={changeHandler}
                    />
                <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </button>
            </div>
                
            </div>
        </div>
        </form>
    </div>

  )
}

export default Form