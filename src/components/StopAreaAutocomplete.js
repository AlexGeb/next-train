import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { setSelectedStopArea } from '../actions/stopArea';
import { fetchDepartures } from '../actions/departures';
import { fetchAutocomplete } from '../actions/autocomplete';
import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Tauri', sans-serif;
  font-size: 11pt;
  width: 22em;
  color: white;
  border: solid #777 1px;
  background-color: #333;
  padding: 0.2em 0.1em;
  margin-left: 0.2em;
  vertical-align: middle;
`;
const Item = styled.div`
  text-align: left;
  color: black;
  padding: 2.5px 10px;
  background-color: ${({ highlighted }) =>
    highlighted ? 'papayawhip' : 'transparent'};
`;

const Label = styled.label`
  vertical-align: middle;
  font-size: 11pt;
`;

class StopAreaAutocomplete extends Component {
  state = { value: this.props.stopArea };
  onValueChanged = e => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onValueChanged(value);
  };
  onSelect = item => {
    this.setState({ value: item.label });
    this.props.onSelect(item);
  };
  toggle = false;
  render() {
    let { value } = this.state;
    const { items, stopAreaName } = this.props;
    if (stopAreaName && !this.toggle) {
      value = stopAreaName;
      this.toggle = true;
    }
    return (
      <div>
        <Label>Départ :</Label>
        <Autocomplete
          items={items}
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={item => item.label}
          renderItem={(item, highlighted) => (
            <Item key={item.id} highlighted={highlighted}>
              {item.label}
            </Item>
          )}
          renderInput={props => {
            const { ref, ...rest } = props;
            return (
              <Input
                {...rest}
                innerRef={ref}
                placeholder="Rechercher une gare de départ"
              />
            );
          }}
          value={value}
          onChange={e => this.onValueChanged(e)}
          onSelect={(value, item) => this.onSelect(item)}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ autocomplete, stopArea }) => {
  return { items: autocomplete.items, stopAreaName: stopArea.name };
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
