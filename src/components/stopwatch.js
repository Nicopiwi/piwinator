import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';
 
const Stopwatch = (props) => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    onChange={({ hours, minutes, seconds }) => {
        props.seconds = seconds
       //props.increaseSec(minutes, seconds+1)
    }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div>
          <p>
            Tiempo: { formatted }
          </p>
        </div>
      );
    }}
   />
);
 
export default Stopwatch;