import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  background-color: ${({ index }) => (index % 2 ? '#043a6b' : '#0c5da5')}
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
  ${props => props.middle && 'width: 4.5em;'};
  ${props => props.right && 'font-size: 160%;'};
  ${props => props.color && `color:${props.color};`};
`;
const Span = styled.span`
  display: inline-block;
`;
const Img = styled.img`
  position: relative;
  top: 0.1em;
  height: 1em;
`;
const Departure = props => {
  const { display_informations, depTime } = props.departure;
  return (
    <Row {...props}>
      <Cell color={'#' + display_informations.color} left>
        <Span>{display_informations.headsign}</Span>
      </Cell>
      <Cell middle>
        <Span>{depTime.format('LT')}</Span>
      </Cell>
      <Cell right>
        <Span>
          <Img src={'/img/rer' + display_informations.label + '.svg'} />{' '}
          {display_informations.direction.replace('Gare de ', '').split('(')[0]}
        </Span>
      </Cell>
    </Row>
  );
};
export default Departure;
