import React from 'react';
import styled from 'styled-components';

const Line = styled.p`
  padding: 2.5px 10px;
  text-align: left;
`;

const Departure = ({ departure }) => {
  const { display_informations, depTime } = departure;
  return (
    <Line>
      <span style={{ color: '#' + display_informations.color }}>
        {display_informations.commercial_mode} {display_informations.label}
      </span>{' '}
      en direction de{' '}
      <span style={{ textDecoration: 'underline' }}>
        {display_informations.direction}
      </span>, départ à{' '}
      <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
        {depTime.format('LT')}
      </span>{' '}
      ({depTime.fromNow()})
    </Line>
  );
};
export default Departure;
