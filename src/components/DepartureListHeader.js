import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Title = styled.p`
  padding: 2.5px 10px;
  font-size: 1.5em;
`;

const DepartureListHeader = ({ stopArea }) =>
  stopArea.name ? (
    <Title>Prochains trains au départ de : {stopArea.name}</Title>
  ) : null;

export default DepartureListHeader;
