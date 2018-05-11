import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { getPossibleItems } from '../services/api-sncf';
import { connect } from 'react-redux';
import { setSelectedStopArea } from '../actions/stopArea';
import { fetchDeparturesSuccess, fetchDeparturesFailure, fetchDepartures } from '../actions/departures';

class StopAreaAutocomplete extends Component {
  state = { items: [], value: '' };

  onValueChanged = e => {
    const value = e.target.value;
    this.setState({ value });
    if (value && value.length > 2) {
      getPossibleItems(value).then(items => {
        const stop_area = items.places.map(p => p.stop_area);
        this.setState({ items: stop_area });
      });
    }
  };
  onSelect = item => {
    this.setState({ value: item.label });
    const { setSelectedStopArea, fetchDepartures } = this.props;
    setSelectedStopArea(item)
    fetchDepartures(item.id)
  };
  render() {
    const { value, items } = this.state;
    return (
      <Autocomplete
        items={items}
        shouldItemRender={(item, value) =>
          item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        getItemValue={item => item.label}
        renderItem={(item, highlighted) => (
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
          >
            {item.label}
          </div>
        )}
        value={value}
        onChange={e => this.onValueChanged(e)}
        onSelect={(value, item) => this.onSelect(item)}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedStopArea: (stopArea) => {
      return dispatch(setSelectedStopArea(stopArea))
    },
    fetchDepartures: (stopArea) => {
      return dispatch(fetchDepartures(stopArea))
    }
  }
}

export default connect(null, mapDispatchToProps)(StopAreaAutocomplete);
