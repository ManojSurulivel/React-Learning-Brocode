//1.How to send data from Child to Parent using callback functions ?

import React, { useState } from 'react';

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
};
  return (
    <div>
      <ChildComponent onData={handleDataFromChild} />
      <p>Data from child: {dataFromChild}</p>
    </div> 
      );
}
export default ParentComponent;

function ChildComponent({ onData }) {
    const sendDataToParent = () => {
      const data = 'Hello from child';
      onData(data);
    };
    return (
      <button onClick={sendDataToParent}>Send Data to Parent</button>
  ) }