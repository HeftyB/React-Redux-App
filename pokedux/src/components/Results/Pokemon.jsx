import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPokemon } from "../../actions";
import { Button } from "reactstrap";

export const Pokemon = (props) => {
    console.log(props)
    const { getAllPokemon, mons } = props

    if (!mons) {return}
    
    let pokemons = mons.map( item => {
        console.log(item);
        let moves = item.moves.map( item => {
            return (<p>{item.move.name}</p>)
        })
        let abilities = item.abilities.map( item => {
            return (
                <p>{item.ability.name}</p>)
        })
        let game_indices = item.game_indices.map( item => {
            return (<p>{item.version.name}</p>)
        })
        // let moves = item.moves.map()
        // let sprites = item.sprites -- object
        let types = item.types.map( item => {
        return(<p>{item.type.name}</p>)
        })
        let stats = item.stats.map( item => {
        return(<p>{`${item.stat.name} : ${item.base_stat}`}</p>)
        })
        return (
            <div className="pokemons" key={item.id}>
                {item.name}
                {item.weight}
                {item.height}
                {item.id}
                {item.base_experience}
                {item.location_area_encounters}
                {moves}
                {abilities}
                {game_indices}
                {types}
                {stats}

            </div>
        )
    })

    return (
        <div>
            <Button onClick={() => getAllPokemon()}>Get All Pokemon</Button>
            {pokemons}
        </div>
    )
}

const mapStateToProps = (state) => ({
    mons: state.mons
})

const mapDispatchToProps = {
    getAllPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
