import React, { useState } from "react";
import Toggle from "./wear"


/*
@author Sejal Patel
Shows the weat page
*/



/*
display toggle with image depending on the weather passed

@param data(weather)
@ return toggle with image
*/
function App({data}) {


  let typeOfWeather = ( Math.round(data.list[0].main.temp) > 15 ) ? "Hot" : "Cold";


  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };
  return (
    <div className="App">
      <Toggle toggled={toggled} onClick={handleClick} data={typeOfWeather} />
    </div>
    
  );
}

export default App;
