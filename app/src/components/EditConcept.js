import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'

const EditConcept = () => {
    const initialFormState = {
        command: "",
        action: "",
        about: "",
    }

    const [ concepts, setConcept ] = useState(initialFormState)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/concepts/${id}`)
                .then(response => response.json())
                .then(data => setConcept(data))
        }
    }, [id, setConcept])

    const handleChange = (event) => {
        const { name, value } = event.target

        setConcept({...concepts, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await fetch('/api/concepts' + (concepts.id ? '/' + concepts.id : ''), {
            method: (concepts.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(concepts)
        })
        setConcept(initialFormState)
        navigate('/concepts')
    }

    const title = <h2>{concepts.id ? 'Edit Command' : 'Add Command'}</h2>

    return (<div>
        <NavBar />

        <header className="bg-white shadow mx-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                </div>
        </header>
        <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                    <form onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label for="command" className='block mb-2 text-base font-medium text-gray-900 dark:text-gray-300'>Command</label>
                            <input type="text" name="command" id="command" value={concepts.command || ''} onChange={handleChange} autoComplete="command" className='block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </div>

                        <div className='mb-6'>
                            <label for="action" className='block mb-2 text-base font-medium text-gray-900 dark:text-gray-300'>Action</label>
                            <input type="text" name="action" id="Action" value={concepts.action || ''} onChange={handleChange} autoComplete="action" className='block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </div>

                        <div className='mb-6'>
                            <label for="about" className='block mb-2 text-base font-medium text-gray-900 dark:text-gray-300'>About</label>
                            <textarea type="text" name='about' rows="4" id='about' value={concepts.about || ''} onChange={handleChange} autoComplete="about" className=' resize-y block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />                
                        </div>

                        <div className='mb-6'>
                            <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Save</button>{' '}
                            <button tag={Link} to="/concepts" className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Cancel</button>
                        </div>
                    </form>
                </div>
            </main>  
    </div>)
}

export default EditConcept