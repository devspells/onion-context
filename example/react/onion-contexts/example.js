import React from "react";
import OnionContext from 'onion-context';


class ExampleContextState extends OnionContext.contextStateFactory(React.Component) {
  constructor(props) {
    super(props);

    this.state = {
      someValue: Date.now()
    }
  }

  update() {
    this.setState({ someValue: Date.now() });
  }

  exportContextState() {
    return {
      update: this.update.bind(this),
      ...this.state
    };
  }
}


export default OnionContext.onionContextFactory({
  name: 'exampleContext',
  state: ExampleContextState,
  context: React.createContext({}),
  renderLib: React
});
