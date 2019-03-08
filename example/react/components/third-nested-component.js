import React from "react";
import OnionContext from 'onion-context';

import ExampleOnionContext from '../onion-contexts/example';


const ThirdNestedComponent = props => {
  return (
    <div style={{padding: '1em', margin: '1em', outline: 'solid black 1px'}}>
      3rd nested component: exampleOniontContext someValue={props.exampleContext.someValue}

      <br />

      <button
        onClick={props.exampleContext.update}
        style={{margin: '1em 0'}}
      >
        update exampleOnionContext someValue
      </button>
    </div>
  );
}


export default OnionContext.attachConsumers(
  ExampleOnionContext.consumerContainer
)(ThirdNestedComponent);
