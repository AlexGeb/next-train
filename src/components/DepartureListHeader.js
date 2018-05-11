import React, { Component } from 'react';
import { connect } from 'react-redux';

const DepartureListHeader = ({ stopArea }) => (<p>Prochains trains au départ de : {stopArea.name}</p>)

export default DepartureListHeader