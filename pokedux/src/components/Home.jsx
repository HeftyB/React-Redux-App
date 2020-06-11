import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { getInitialData, getData } from "../actions";
import { 
    Card, 
    Button, 
    CardTitle, 
    CardText, 
    Row, 
    Col } from 'reactstrap';

function Home(props) {
    const { initialLinks, currentPageData, getData } = props;
    let keys = 9000;
    let links = [];
    for (let property in initialLinks) {
        keys++
        links.push(
            <div className="linkCard" key={keys}>
                <Card body>
                <CardTitle>{`Search by: ${property}`}</CardTitle>
                <Link to={`/${property}`}>
                    <Button onClick={() => getData(initialLinks[property])}>{`Go!`}</Button>
                </Link>
                </Card>
            </div>
        )
    }
      
    return (
        <div>
            <h1>HOMEPAGE</h1>
            {links}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      initialLinks: state.initialLinks,
      currentPageData: state.currentPageData
    }
}

export default connect (mapStateToProps, {getData}) (Home)