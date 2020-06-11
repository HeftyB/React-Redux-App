const initialState = {
  initialLinks: {
    // ability : "https://pokeapi.co/api/v2/ability/",
    // berry : "https://pokeapi.co/api/v2/berry/",
    // berryFirmness : "https://pokeapi.co/api/v2/berry-firmness/",
    // berryFlavor : "https://pokeapi.co/api/v2/berry-flavor/",
    // characteristic : "https://pokeapi.co/api/v2/characteristic/",
    // contestEffect : "https://pokeapi.co/api/v2/contest-effect/",
    // contestType : "https://pokeapi.co/api/v2/contest-type/",
    // eggGroup : "https://pokeapi.co/api/v2/egg-group/",
    // encounterCondition : "https://pokeapi.co/api/v2/encounter-condition/",
    // encounterConditionValue : "https://pokeapi.co/api/v2/encounter-condition-value/",
    // encounterMethod : "https://pokeapi.co/api/v2/encounter-method/",
    // evolutionChain : "https://pokeapi.co/api/v2/evolution-chain/",
    // evolutionTrigger : "https://pokeapi.co/api/v2/evolution-trigger/",
    // gender : "https://pokeapi.co/api/v2/gender/",
    generation : "https://pokeapi.co/api/v2/generation/",
    // growthRate : "https://pokeapi.co/api/v2/growth-rate/",
    // item : "https://pokeapi.co/api/v2/item/",
    // itemAttribute : "https://pokeapi.co/api/v2/item-attribute/",
    // itemCategory : "https://pokeapi.co/api/v2/item-category/",
    // itemFlingEffect : "https://pokeapi.co/api/v2/item-fling-effect/",
    // itemPocket : "https://pokeapi.co/api/v2/item-pocket/",
    // language : "https://pokeapi.co/api/v2/language/",
    location : "https://pokeapi.co/api/v2/location/",
    locationArea : "https://pokeapi.co/api/v2/location-area/",
    // machine : "https://pokeapi.co/api/v2/machine/",
    // move : "https://pokeapi.co/api/v2/move/",
    // moveAilment : "https://pokeapi.co/api/v2/move-ailment/",
    // moveBattleStyle : "https://pokeapi.co/api/v2/move-battle-style/",
    // moveCategory : "https://pokeapi.co/api/v2/move-category/",
    // moveDamageClass : "https://pokeapi.co/api/v2/move-damage-class/",
    // moveLearnMethod : "https://pokeapi.co/api/v2/move-learn-method/",
    // moveTarget : "https://pokeapi.co/api/v2/move-target/",
    // nature : "https://pokeapi.co/api/v2/nature/",
    // palParkArea : "https://pokeapi.co/api/v2/pal-park-area/",
    // pokeathlonStat : "https://pokeapi.co/api/v2/pokeathlon-stat/",
    pokedex : "https://pokeapi.co/api/v2/pokedex/",
    pokemon : "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",//pokemon : "https://pokeapi.co/api/v2/pokemon/",
    // pokemonColor : "https://pokeapi.co/api/v2/pokemon-color/",
    // pokemonForm : "https://pokeapi.co/api/v2/pokemon-form/",
    // pokemonHabitat : "https://pokeapi.co/api/v2/pokemon-habitat/",
    // pokemonShape : "https://pokeapi.co/api/v2/pokemon-shape/",
    // pokemonSpecies : "https://pokeapi.co/api/v2/pokemon-species/",
    region : "https://pokeapi.co/api/v2/region/",
    // stat : "https://pokeapi.co/api/v2/stat/",
    // superContestEffect : "https://pokeapi.co/api/v2/super-contest-effect/",
    // type : "https://pokeapi.co/api/v2/type/",
    version : "https://pokeapi.co/api/v2/version/",
    versionGroup : "https://pokeapi.co/api/v2/version-group/"
  },
  currentPageData: {
    results: [],
  },
  isFetching: false,
  error: ""
}

export default function reducers (state = initialState, action) {
    switch (action.type) {
        case "GET_DATA_START":
          return {
            ...state,
            isFetching: true
          }
        case "GET_DATA_SUCCESS":
          return {
            ...state,
            currentPageData: action.payload
          }
        case "GET_DATA_FAIL":
          return {
            ...state,
            isFetching: false,
            error: action.payload
          }
        default:
            return state;
    }
}