import React from "react";
import OnionContext from 'onion-context';

import ExampleOnionContext from '../onion-contexts/example';


const FirstNestedComponent = props => {
  return (
    <div style={{padding: '1em', margin: '1em', outline: 'solid black 1px'}}>
      1st nested component: exampleOniontContext someValue={props.exampleContext.someValue}
    </div>
  );
}


export default OnionContext.attachConsumers(
  ExampleOnionContext.consumerContainer
)(FirstNestedComponent);
