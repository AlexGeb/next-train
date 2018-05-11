import React, { Component } from 'react';
import Departure from './Departure';


const DeparturesList = ({ departures }) => {
    console.log(departures)
    return (<div>{departures.map((departure, key) =>
        <Departure key={key} departure={departure} />
    )}</div>)
}

export default DeparturesList;