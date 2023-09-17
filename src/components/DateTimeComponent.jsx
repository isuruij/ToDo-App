import React, { useState, useEffect } from 'react';

function DateTimeComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every 1 second

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div>
      <h4 style={{fontFamily:"monospace",color:"white",paddingLeft:"60%",marginTop:"-3%",position:"absolute"}}> {currentDate.toDateString()}</h4>
    </div>
  );
}

export default DateTimeComponent;
