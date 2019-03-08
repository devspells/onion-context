import React from "react";

import ThirdNestedComponent from './third-nested-component';


const SecondNestedComponent = () => {
  return (
    <div style={{padding: '1em', margin: '1em', outline: 'solid black 1px'}}>
      2nd nested component: without onion context

      <ThirdNestedComponent />
    </div>
  );
}


export default SecondNestedComponent;
