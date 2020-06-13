import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInitialData, getData } from "../../actions";
import { 
    Card, 
    Button, 
    CardTitle, 
    CardText, 
    Row, 
    Col } from 'reactstrap';


export const Generation = (props) => {
    const { currentPageData } = props;
    let links = currentPageData.results.map( item => {
        console.log(item.url)
        return  <div>
            <Card>
                <Button onClick={() => {console.log("click");getData(item.url)}}>{item.name}</Button>
            </Card>
        </div>
    })
    return (
        <div>
            {links}
        </div> 
    )
}

const mapStateToProps = (state) => ({
    currentPageData: state.currentPageData
})

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Generation)

