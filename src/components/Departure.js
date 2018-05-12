import React, { Component } from 'react';
import * as moment from 'moment';
import 'moment/locale/fr';
import styled from 'styled-components';

moment.locale('fr');

const Line = styled.p`
  padding: 2.5px 10px;
  text-align: left;
`;

const Departure = ({ departure }) => {
  const { display_informations, stop_date_time } = departure;
  const depTime = moment(stop_date_time.departure_date_time);
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
