import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  background-color: ${({ index }) => (index % 2 ? '#0c5da5' : '#043a6b')}
  display:table-row;
  text-align: left;
  color:white;
  width:100%;
  height:70px; 
`;
const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
  ${props => (props.left || props.middle) && `text-align: center;`};
  ${props => props.left && 'width: 5em;'};
  ${props => props.middle && 'font-size: 125%;'};
  ${props => props.right && 'font-size: 160%;'};
`;

const Departure = props => {
  const { display_informations, depTime } = props.departure;
  return (
    <Row {...props}>
      <Cell style={{ color: '#' + display_informations.color }} left>
        <span style={{ display: 'inline-block' }}>
          {display_informations.headsign}
        </span>
        <span style={{ display: 'inline-block' }}>
          {display_informations.label}
        </span>
      </Cell>
      <Cell middle>
        <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
          {depTime.isSame(new Date(), 'day')
            ? `${depTime.format('LT')}`
            : `${depTime.format('LL')}, ${depTime.format('LT')}`}
        </span>{' '}
        ({depTime.fromNow()})
      </Cell>
      <Cell right>
        <span>{display_informations.direction}</span>
      </Cell>
    </Row>
  );
};
export default Departure;
