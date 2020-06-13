import React, { useState } from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import pokeLoad from "../../photos/pokeLoad.jpg"

function Mons(props) {
    const { 
        abilities, 
        forms, 
        base_experience,
        game_indices, 
        height, 
        id, 
        location_area_encounters, 
        moves, 
        name, 
        sprites, 
        stats, 
        types, 
        weight,
        buttonLabel,
        className } = props.currentPageData;
        if (sprites) {
            let movess = moves.map( item => {
                return (<p>{item.move.name}</p>)
            })
            let abilitiess = abilities.map( item => {
                return (
                    <p>{item.ability.name}</p>)
            })
            let game_indicess = game_indices.map( item => {
                return (<p>{item.version.name}</p>)
            })
            // let moves = item.moves.map()
            // let sprites = item.sprites -- object
            let typess = types.map( item => {
            return(<p>{item.type.name}</p>)
            })
            let statss = stats.map( item => {
            return(<p>{`${item.stat.name} : ${item.base_stat}`}</p>)
            })
        }


        const [modal, setModal] = useState(false);

        const toggle = () => setModal(!modal);
        
        // console.log(sprites.front_defualt)
        // sprites.front_default ?
        return (
        <div className="mons">
            <h1>{`Name: ${props.currentPageData.name}`}</h1>
            <div class="card">
                <div className="card-header">{name}</div>
                <div className="card-body">
                    { sprites ? <img src={sprites.front_default} className="sprites"/> : <img src={pokeLoad} className="loading"/> }
                    {/* <img src={ sprites ? sprites.front_default : pokeLoad} alt="img"/>   */}
                    {/* :  */}
                    {/* <h6>....sprite is loading...</h6> */}
                    {/* } */}
                    <div>
                        {/* <p> */}
                            {`${name}'s`}
                            <br/>
                            Height: {height}
                            <br/>
                            Weight: {weight}
                            {/* {item.name}
                            {item.weight}
                            {item.height} */}
                            id#: {id}
                            Base Experience: {base_experience}
                            <a href={location_area_encounters}>Location area encounters</a>
                            <div>
                                {moves}
                            </div>
                            {/* <div>
                                {abilities}
                            </div>                           */}
                                {game_indices}
                            <div>                            
                                {types}
                            </div>                            
                            <div>
                                {stats}
                            </div>
                        {/* </p> */}
                    </div>
                    <div>
                        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                            <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
    //  : return (
    //     <div className="loading">
    //         <h1>....mon is loading.......</h1>
    //     </div>
    // )
}

const mapStateToProps = state => {
    return {
      currentPageData: state.currentPageData
    }
}

export default connect (mapStateToProps, {}) (Mons)