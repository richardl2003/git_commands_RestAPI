import {Fragment, useState} from "react";
import {Accordion, AccordionHeader, AccordionBody} from '@material-tailwind/react'
import '../App.css'
import NavBar from "./NavBar";

function Icon({id, open}) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    )
}


const Home = () => {

    const [open, setOpen] = useState(0)

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value)
    }

    return (
        <div>
            <NavBar />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Git Commands Rest API</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <p>
                        This is a Java Spring Boot <strong>CRUD (Create, Read, Update, Delete) Rest API</strong> with a frontend component built using <strong>React</strong> and <strong>TailwindCSS</strong>. 
                    </p>

                    <p className="mt-5">
                        The purpose of this project is store and keep as a reference of the Git commands I learned during the course of my 
                        time as a Research Assistant at McMaster University analzying merge conflicts in Git.
                    </p>

                    <h1 className="mt-5 text-2xl font-semibold">
                        Here are the API Endpoints that I have created:
                    </h1>

                    <div className="px-4 py-6 sm:px-0 bg-slate-50">
                        <Fragment>
                            <Accordion 
                                open={open === 1}
                                icon={<Icon id={1} open={open} />}
                                onClick={() => handleOpen(1)}
                            >
                                <AccordionHeader>
                                    <div className="flex items-center">
                                        <div className="bg-green-400 rounded-sm text-white text-base min-w-80px font-bold px-2">GET</div>
                                        <p className="ml-4">/api/concepts</p>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    <div className="text-left min-h-50px">
                                        <h1 className="text-xl font-semibold">Description</h1>
                                        <p className="mt-2 text-base font-normal">Returns all the concepts that are currently stored</p>
                                    </div>   
                                </AccordionBody>
                            </Accordion>

                            <Accordion 
                                open={open === 2}
                                icon={<Icon id={2} open={open} />}
                                onClick={() => handleOpen(2)}
                            >
                                <AccordionHeader>
                                    <div className="flex items-center">
                                        <div className="bg-green-400 rounded-sm text-white text-base min-w-80px font-bold px-2">GET</div>
                                        <p className="ml-4">/api/concepts/id</p>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    <div className="text-left min-h-50px">
                                        <h1 className="text-xl font-semibold">Description</h1>
                                        <p className="mt-2 text-base font-normal">Returns a single concept, that is identified by it's id</p>
                                    </div>   
                                </AccordionBody>
                            </Accordion>

                            <Accordion 
                                open={open === 3}
                                icon={<Icon id={3} open={open} />}
                                onClick={() => handleOpen(3)}
                            >
                                <AccordionHeader>
                                    <div className="flex items-center">
                                        <div className="bg-blue-400 rounded-sm text-white text-base min-w-80px font-bold px-2 items-center">POST</div>
                                        <p className="ml-4">/api/concepts/</p>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    <div className="text-left min-h-50px">
                                        <h1 className="text-xl font-semibold">Description</h1>
                                        <p className="mt-2 text-base font-normal">Creates a new concept</p>
                                    </div>   

                                    <div className="mt-3">
                                        <h1 className="text-xl font-semibold">Parameters</h1>
                                    </div>

                                    <table className='w-full text-left mt-3'>
                                        <thead>
                                            <tr>
                                                <th className="font-semibold">Name</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-base font-normal">command</td>
                                                <td className="text-base font-normal">The desired Git Command to store</td>
                                            </tr>
                                            <tr>
                                                <td className="text-base font-normal">action</td>
                                                <td className="text-base font-normal">The task the command accomplishes</td>
                                            </tr>
                                            <tr>
                                                <td className="text-base font-normal">about</td>
                                                <td className="text-base font-normal">Interesting information about the command/extra pointers to know about</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </AccordionBody>
                            </Accordion>     

                            <Accordion 
                                open={open === 4}
                                icon={<Icon id={4} open={open} />}
                                onClick={() => handleOpen(4)}
                            >
                                <AccordionHeader>
                                    <div className="flex items-center">
                                        <div className="bg-orange-400 rounded-sm text-white text-base min-w-80px font-bold px-2">PUT</div>
                                        <p className="ml-4">/api/concepts/id</p>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    <div className="text-left min-h-50px">
                                        <h1 className="text-xl font-semibold">Description</h1>
                                        <p className="mt-2 text-base font-normal">Updates a particular command, if there was a mistake</p>
                                    </div>   

                                    <div className="mt-3">
                                        <h1 className="text-xl font-semibold">Parameters</h1>
                                    </div>           

                                    <table className='w-full text-left mt-3'>
                                        <thead>
                                            <tr>
                                                <th className="font-semibold">Name</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="font-normal text-base">Body</td>
                                                <td className="font-normal text-base">Command object that needs to the edited</td>
                                            </tr>
                                        </tbody>
                                    </table>                         
                                </AccordionBody>
                            </Accordion>

                            <Accordion 
                                open={open === 5}
                                icon={<Icon id={5} open={open} />}
                                onClick={() => handleOpen(5)}
                            >
                                <AccordionHeader>
                                    <div className="flex items-center">
                                        <div className="bg-red-400 rounded-sm text-white text-base min-w-80px font-bold px-2">DELETE</div>
                                        <p className="ml-4">/api/concepts/id</p>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    <div className="text-left min-h-50px">
                                        <h1 className="text-xl font-semibold">Description</h1>
                                        <p className="mt-2 text-base font-normal">Deletes the command that is associated with the particular ID</p>
                                    </div>   
                                </AccordionBody>
                            </Accordion>                        
                            
                        </Fragment>                     
                    </div>
                </div>
            </main>   
        </div>
    )
}

export default Home;