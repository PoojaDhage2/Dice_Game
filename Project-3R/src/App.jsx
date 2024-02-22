import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";


function App() {
 
  const [isStart , setStart]= useState(false);

  const func = () => {
    // setStart((x)=>(!x));
    setStart(!isStart);
  };

  return (
    <>
    {isStart ? <GamePlay/> : <StartGame toggle={func}/>}      
    </>
  );
}

export default App;
