import React, { Component } from 'react';
import * as moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const Departure = ({ departure }) => {
    const { display_informations, stop_date_time } = departure;
    const depTime = moment(stop_date_time.departure_date_time);
    return <li>{display_informations.commercial_mode} {display_informations.label} ({display_informations.headsign}) en direction de {display_informations.direction}, départ à {depTime.format('LT')} ({depTime.fromNow()})</li>
}
export default Departure