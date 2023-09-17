import { useState } from "react";

import React from "react";

function Clock() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return (
    <div>
      <h4 style={{color:"white", marginRight:"30%",fontFamily:"monospace"}}>{ctime}</h4>
 
    </div>
  );
}

export default Clock;
