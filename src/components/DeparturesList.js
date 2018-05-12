import React from 'react';
import Departure from './Departure';
import * as moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const DeparturesList = ({ departures }) =>
  departures.length > 0 ? (
    <div>
      {departures
        .map(d => ({
          ...d,
          depTime: moment(d.stop_date_time.departure_date_time)
        }))
        .sort((d1, d2) => d1.depTime.isAfter(d2.depTime))
        .map((departure, key) => <Departure key={key} departure={departure} />)}
    </div>
  ) : null;

export default DeparturesList;
