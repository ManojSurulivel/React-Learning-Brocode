import React, { useRef } from 'react';

// Child Component
const ChildComponent = ({ parentRef }) => {
  const childDataRef = useRef(null);

  // Simulate updating the ref in the child component
  const sendDataToParent = () => {
    childDataRef.current = "Data from Child";
    // Notify the parent (optional)
    if (parentRef.current) {
      parentRef.current(childDataRef.current);
    }
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const parentDataRef = useRef(null);

  const handleChildData = (data) => {
    parentDataRef.current = data;
    console.log("Data received from child:", parentDataRef.current);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent parentRef={handleChildData} />
      <p>Data from child (via ref): {parentDataRef.current}</p>
    </div>
  );
};

export default ParentComponent;
