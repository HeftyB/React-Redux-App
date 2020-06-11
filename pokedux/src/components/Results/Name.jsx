import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "../../actions";

function Name(props) {

    const { currentPageData, getData } = props;

    let monsLink = currentPageData.results.map( item => {
        return (
            <li>
                <Link to={`/Mons`} onClick={() => getData(item.url)}>{item.name}</Link>
            </li>
        )
    })
    
    return (
        <div className="pokemonName">
            <h1>NAME</h1>
            <ul>
                {monsLink}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentPageData: state.currentPageData
    }
  }

export default connect(mapStateToProps, {getData})(Name)