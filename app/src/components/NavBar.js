import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <nav className='bg-gray border-gray-200 dark:bg-gray-900'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5'>
                    <NavLink tag={Link} to="/">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Home</span>
                    </NavLink>
                    <NavLink tag={Link} to="/concepts">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">View All Commands</span>
                    </NavLink>
                    <button tag={Link} to="/concepts/add" className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-3'>Add Git Command</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar