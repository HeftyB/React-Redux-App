import React from 'react';
import { connect } from "react-redux";

function Results(props) {
    const { currentPageData } = props;
    return (
        <div>
            <h1>RESULTS PAGE!!!!!!!</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentPageData: state.currentPageData
    }
  }

export default connect (mapStateToProps, {}) (Results)