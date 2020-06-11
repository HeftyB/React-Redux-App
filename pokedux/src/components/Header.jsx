import React from 'react'
import { Link } from "react-router-dom"
import { Navbar } from 'reactstrap'

export const Header = () => {
    return (
        <div>
            <Navbar className="nav nav-bar">
                <Link to="/">Home</Link>
                <Link to="/Name">Name</Link>
                <Link to="/Location">Location</Link>
                <Link to="/Generation">Generation</Link>
                <Link to="/Pokedex">Pokedex</Link>
                <Link to="/Reigion">Reigion</Link>
                <Link to="/Version">Version</Link>
            </Navbar>
        </div>
    )
}
