import React, { Component } from 'react';
import Departure from './Departure';

const DeparturesList = ({ departures }) =>
  departures.length > 0 ? (
    <div>
      {departures.map((departure, key) => (
        <Departure key={key} departure={departure} />
      ))}
    </div>
  ) : null;

export default DeparturesList;
