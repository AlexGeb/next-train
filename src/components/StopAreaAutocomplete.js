import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { getPossibleItems } from '../services/api-sncf';

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
    this.props.onSelect(item);
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
export default StopAreaAutocomplete;
