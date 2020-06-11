import React, { useState } from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Mons(props) {
    const { 
        abilities, 
        forms, 
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

        const [modal, setModal] = useState(false);

        const toggle = () => setModal(!modal);
        
        debugger

    return (
        <div className="mons">
            <h1>{`Name: ${props.currentPageData.name}`}</h1>
            <div class="card">
                <div class="card-header">{name}</div>
                <div class="card-body">
                    {/*img when this is done being stupid*/}
                    {/* <img src={sprites.front_shiny}></img> <h6>....sprite is loading...</h6> */}
                    <div>
                        <p>
                            {`${name}'s`}
                            <br/>
                            Height: {height}
                            <br/>
                            Weight: {weight}
                        </p>
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
}

const mapStateToProps = state => {
    return {
      currentPageData: state.currentPageData
    }
}

export default connect (mapStateToProps, {}) (Mons)