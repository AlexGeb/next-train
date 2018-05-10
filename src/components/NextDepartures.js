import React, { Component } from 'react';
import { getNextDepartures } from '../services/api-sncf';
import * as moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
class NextDepartures extends Component {
  state = { departures: [] };
  reRenderAll = () => {
    const { stop_area_id } = this.props;
    console.log('render component with stop_area props : ', stop_area_id);
    getNextDepartures(stop_area_id).then(resp => {
      const departures = resp.departures
        .filter(d => d.display_informations.network === 'RER')
        .sort((d1, d2) =>
          d1.display_informations.label.localeCompare(
            d2.display_informations.label
          )
        );
      this.setState({ departures });
    });
  };
  componentDidMount = () => {
    //this.renderAll();
  };

  renderResults = departures => {
    return departures.map((dep, key) => {
      const { display_informations, stop_date_time } = dep;
      const depTime = moment(stop_date_time.departure_date_time);
      return (
        <li key={key}>
          RER {display_informations.label} ({display_informations.headsign}) en
          direction de {display_informations.direction}, départ à{' '}
          {depTime.format('LT')} ({depTime.fromNow()})
        </li>
      );
    });
  };
  render() {
    const { stop_area } = this.props;
    const { departures } = this.state;
    return (
      <div>
        <p>Prochains trains au départ de : {stop_area.name}</p>

        {departures && <ul>{this.renderResults(departures)}</ul>}
      </div>
    );
  }
}

export default NextDepartures;
