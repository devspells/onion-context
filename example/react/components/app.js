import React from "react";
import OnionContext from 'onion-context';

import FirstNestedComponent from './first-nested-component';
import SecondNestedComponent from './second-nested-component';

import ExampleOnionContext from '../onion-contexts/example';


const App = () => {
  return (
    <React.Fragment>
      <FirstNestedComponent />
      <SecondNestedComponent />
    </React.Fragment>
  )
}


export default OnionContext.attachProviders(
  ExampleOnionContext.providerContainer
)(App);
