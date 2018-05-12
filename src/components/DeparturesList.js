import React from 'react';
import Departure from './Departure';
import * as moment from 'moment';
import 'moment/locale/fr';
import styled from 'styled-components';
moment.locale('fr');

const ListWrapper = styled.div`
  display: table;
  width: 100%;
`;
const DeparturesList = ({ departures }) =>
  departures.length > 0 ? (
    <ListWrapper>
      {departures
        .map(d => ({
          ...d,
          depTime: moment(d.stop_date_time.departure_date_time)
        }))
        .sort((d1, d2) => d1.depTime.isAfter(d2.depTime))
        .map((departure, index) => (
          <Departure key={index} index={index} departure={departure} />
        ))}
    </ListWrapper>
  ) : null;

export default DeparturesList;
