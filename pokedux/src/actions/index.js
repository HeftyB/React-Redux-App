import axios from "axios";

export const addFeature = (para) => {
    return { type: "ADD_FEATURE", payload: para}
}

export const removeFeature = (para) => {
    return { type: "REMOVE_FEATURE", payload: para}
}

export const getInitialData = para => {
    return { type: "GET_INITIAL_DATA", payload: para }
}

export const getData = (links) => dispatch => {
    dispatch({ type: "GET_DATA_START" });
    axios.get(links)
        .then( data => {
            // console.log(data.data)
            dispatch({ type: "GET_DATA_SUCCESS", payload: data.data })
        })
        .catch( error => {
            console.log(error);
            dispatch({ type: "GET_DATA_FAIL", payload: `${error.response.status} : ${error.response.data}` })
            debugger
        })
}

export const getAllPokemon = () => dispatch => {
    dispatch({ type: "GET_DATA_START" });
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then( data => {
            dispatch({ type: "GET_ALL_POKEMON", payload:data.data.results })
        })
        .catch( error => {
            console.log(error);
            debugger
        })
}