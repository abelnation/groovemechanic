import React from 'react';

import { Config } from '../config';

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello from Abel {Config.api.host}:{Config.api.port} ({Config.env})
      </div>
    );
  }
}