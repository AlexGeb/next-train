import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { setSelectedStopArea } from '../actions/stopArea';
import { fetchDepartures } from '../actions/departures';
import { fetchAutocomplete } from '../actions/autocomplete';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  font-size: 1.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  min-width: 500px;
`;
const Item = styled.div`
  text-align: left;
  color: black;
  padding: 2.5px 10px;
  background-color: ${({ highlighted }) =>
    highlighted ? 'papayawhip' : 'transparent'};
`;
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
