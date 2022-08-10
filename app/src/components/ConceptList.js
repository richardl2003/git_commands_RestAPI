import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const ConceptList = () => {
    const [ concepts, setConcepts ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch('api/concepts')
            .then(response => response.json())
            .then(data => {
                setConcepts(data)
                setLoading(false)
        })
    }, [])

    const remove = async (id) => {
        await fetch(`/api/concepts/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedConcepts = [...concepts].filter(i => i.id !== id)
            setConcepts(updatedConcepts)
        })
    }

    if (loading) {
        return <p>Loading...</p>
    }

    const conceptList = concepts.map(concept => {
        return <tr key={concept.id}>
            <td class="border px-4 py-2">{concept.command}</td>
            <td class="border px-4 py-2">{concept.action}</td>
            <td class="border px-4 py-2">{concept.about}</td>
            <td class="border px-4 py-2">
                <button tag={Link} to={"/concepts/" + concept.id} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>
                <button onClick={() => remove(concept.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
            </td>
        </tr>
    })

    return (
        <div>
            <NavBar />
            <div className='container mt-6'>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Action</th>
                            <th>About</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conceptList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ConceptList