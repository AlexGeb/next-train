import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { getPossibleItems } from '../services/api-sncf';
import { connect } from 'react-redux';
import { setSelectedStopArea } from '../actions/stopArea';
import {
  fetchDeparturesSuccess,
  fetchDeparturesFailure,
  fetchDepartures
} from '../actions/departures';
import { fetchAutocomplete } from '../actions/autocomplete';

class StopAreaAutocomplete extends Component {
  state = { value: '' };
  onValueChanged = e => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onValueChanged(value);
  };
  onSelect = item => {
    this.setState({ value: item.label });
    this.props.onSelect(item);
  };
  render() {
    const { value } = this.state;
    const { items } = this.props;
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
const mapStateToProps = ({ autocomplete }) => {
  return { items: autocomplete.items };
};
const mapDispatchToProps = dispatch => {
  return {
    onSelect: stopArea => {
      dispatch(setSelectedStopArea(stopArea));
      dispatch(fetchDepartures(stopArea.id));
    },
    onValueChanged: value => {
      if (value && value.length > 2) {
        dispatch(fetchAutocomplete(value));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  StopAreaAutocomplete
);
