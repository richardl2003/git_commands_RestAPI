import React, {useState} from "react"
import { NavLink, Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <nav className='bg-gray-800'>
                <div className='max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <NavLink tag={Link} to="/">
                                    <span class="text-white self-center text-xl font-semibold whitespace-nowrap">API</span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 gap-5">
                                <NavLink tag={Link} to="/concepts">
                                    <span class="text-white self-center text-m whitespace-nowrap">View All Commands</span>
                                </NavLink>

                                <NavLink tag={Link} to="/concepts/add">
                                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add New Command</button>
                                </NavLink>
                            </div> 
                        </div>

                        <div className="mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    </svg>                                        
                                ) : (
                                    <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>                                    
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition 
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 space-y-1 sm:px-3">
                                <div className="flex flex-col gap-3">
                                    <NavLink tag={Link} to="/concepts">
                                        <button type="button" class="text-white bg-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">View all Commands</button>
                                    </NavLink>

                                    <NavLink tag={Link} to="/concepts/add" className="mb-3">
                                        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add New Command</button>
                                    </NavLink>
                                </div>                               
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>       
        </div>
    )
}

export default NavBar