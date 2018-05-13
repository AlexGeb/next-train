import React, { Component } from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

const Heure = styled.div`
  position: fixed;
  top: -40pt;
  right: 8pt;
  width: 4em;
  padding: 0.2em;
  padding-top: 40pt;
  margin: 0;
  background-color: navy;
  border-radius: 0.56em;
  border: white 0.18em solid;
  font-size: 125%;
  z-index: 1;
  cursor: default;
  text-align: center;
`;

export default class extends Component {
  state = { time: moment() };

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ time: moment() });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };
  render() {
    return <Heure>{this.state.time.format('LT')}</Heure>;
  }
}
