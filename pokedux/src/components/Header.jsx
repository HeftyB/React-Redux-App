import React from 'react'
import { Link } from "react-router-dom"
import { Navbar } from 'reactstrap'
import pokemonLogo from "../photos/pokemonLogo.png"

export const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={pokemonLogo} alt="logos"/>
            </div>
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
