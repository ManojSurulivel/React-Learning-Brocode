import React from 'react';

const SubComponent = ({ display }) => {
  return (
    <div style={{backgroundColor:"",margin:"5px",padding:"30px",width:"80%"}}>
      <h2>Submitted Data</h2>
      {/* Render the submitted form data */}
      {display.length > 0 ? (
        <ul style={{color:"green",
                    padding:"10px",
                    border:"5px",
                    borderRadius:"1px solid red"
                    
        }}>
          {display.map((data, index) => (
            <li key={index}>
              <strong>UserName:</strong> {data.username}<br/>
              <strong>Email:</strong> {data.email}<br/>
              <strong> Channel:</strong> {data.channel}<br/>
              <strong> Textarea:</strong> {data.textarea}<br/>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{color:"red"}}>No data submitted yet.</p>
      )}
    </div>
  );
};

export default SubComponent;
