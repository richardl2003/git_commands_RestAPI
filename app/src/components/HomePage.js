import React from "react";
import '../App.css'
import NavBar from "./NavBar";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container mt-6">
                <Link to="/concepts">Concepts List</Link>
            </div>
        </div>
    )
}

export default Home;