import React, { useRef, useState, useCallback } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

import './App.css';


const unityBuildDirPath = 'unityBuilds/Space_Shooter_react_trial/Build/';
const unityBuildJsonPath = unityBuildDirPath + 'Space_Shooter_react_trial.json';
const unityLoaderPath = unityBuildDirPath + 'UnityLoader.js';


function App() {  
  const unityContent = useRef(new UnityContent(unityBuildJsonPath, unityLoaderPath));
  
  const [sliderValue, setSliderValue] = useState(50);
  const handleSliderChange = useCallback((event) => {
    const sliderValue = parseFloat(event.target.value);
    setSliderValue(sliderValue);    
    unityContent.current.send('WebInterface', 'SetBgScale', sliderValue);
  }, [setSliderValue, unityContent]);
  
  const [enemyPositionStr, setEnemyPositionStr] = useState('0, 0, 0');
  const handleUnityContentEnemyPositionAsStringArrived = useCallback(position => {
    //console.log(position);
    setEnemyPositionStr(position);
  }, [setEnemyPositionStr]);

  const [enemyPositionVec, setEnemyPositionVec] = useState('0, 0, 0');
  const handleUnityContentEnemyPositionAsVectorArrived = useCallback(position => {
    //console.log(position);
    setEnemyPositionVec(position);
  }, [setEnemyPositionVec]);
  
  unityContent.current.on('EnemyPositionAsStringArrived', handleUnityContentEnemyPositionAsStringArrived);
  unityContent.current.on('EnemyPositionAsVectorArrived', handleUnityContentEnemyPositionAsVectorArrived);
  
  return (
    <div className="App">
      <div className="slider-container">
        <span>Background scale : </span>
        <input type="range" min="1" max="100" value={sliderValue} className="slider"
          onChange={handleSliderChange}
        />
      </div>
      <div className="enemy-position-str-container">
        <span>Enemy position as string : </span>
        <span className="enemy-position-str">{enemyPositionStr}</span>
      </div>
      <div className="enemy-position-vec-container">
        <span>Enemy position as vector : </span>
        <span className="enemy-position-vec">{enemyPositionVec}</span>
      </div>
      <div className="webgl-content">
        <div id="gameContainer">
          <Unity unityContent={unityContent.current} />
        </div>
        <div className="footer">
          <div className="webgl-logo" />
          <div className="fullscreen" />
          <div className="title">Space Shooter</div>
        </div>
      </div>
    </div>
  );
}


export default App;