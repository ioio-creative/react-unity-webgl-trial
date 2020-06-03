import React, { useState, useCallback, useEffect } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

import { getAbsoluteUrlFromRelativeUrl } from 'utils/setStaticResourcesPath';

import './SpaceShooter.css';

/**
 * !!!Important!!!
 * To make use the public directory path is correct, use process.env.PUBLIC_URL
 * https://create-react-app.dev/docs/using-the-public-folder
 */
const unityBuildDirPath = getAbsoluteUrlFromRelativeUrl(
  'unityBuilds/Space_Shooter_react_trial/Build/'
);
const unityBuildJsonPath = unityBuildDirPath + 'Space_Shooter_react_trial.json';
const unityLoaderPath = unityBuildDirPath + 'UnityLoader.js';

let unityContent = null;

const SpaceShooter = _ => {
  if (unityContent === null) {
    unityContent = new UnityContent(unityBuildJsonPath, unityLoaderPath);
  }

  const [sliderValue, setSliderValue] = useState(50);
  const handleSliderChange = useCallback(
    event => {
      const sliderValue = parseFloat(event.target.value);
      setSliderValue(sliderValue);
      unityContent.send('WebInterface', 'SetBgScale', sliderValue);
    },
    [setSliderValue]
  );

  const [playerPositionStr, setPlayerPositionStr] = useState('0, 0, 0');
  const handleUnityContentPlayerPositionAsStringArrived = useCallback(
    position => {
      //console.log(position);
      setPlayerPositionStr(position);
    },
    [setPlayerPositionStr]
  );

  const [playerPositionVec, setPlayerPositionVec] = useState('0, 0, 0');
  const handleUnityContentPlayerPositionAsVectorArrived = useCallback(
    position => {
      //console.log(position);
      setPlayerPositionVec(position);
    },
    [setPlayerPositionVec]
  );

  const handleFullScreenClicked = useCallback(_ => {
    // https://github.com/elraccoone/react-unity-webgl/blob/master/source/UnityContent.ts
    unityContent.setFullscreen(true);
  }, []);

  useEffect(
    _ => {
      unityContent.on(
        'PlayerPositionAsStringArrived',
        handleUnityContentPlayerPositionAsStringArrived
      );
      unityContent.on(
        'PlayerPositionAsVectorArrived',
        handleUnityContentPlayerPositionAsVectorArrived
      );

      return _ => {
        // https://github.com/elraccoone/react-unity-webgl/blob/master/source/UnityContent.ts
        unityContent.remove();
        unityContent = null;
      };
    },
    [
      handleUnityContentPlayerPositionAsStringArrived,
      handleUnityContentPlayerPositionAsVectorArrived
    ]
  );

  return (
    <div className='space-shooter'>
      <div className='slider-container'>
        <span>Background scale : </span>
        <input
          type='range'
          min='1'
          max='100'
          value={sliderValue}
          className='slider'
          onChange={handleSliderChange}
        />
      </div>
      <div className='player-position-str-container'>
        <span>Player position as string : </span>
        <span className='player-position-str'>{playerPositionStr}</span>
      </div>
      <div className='player-position-vec-container'>
        <span>Player position as vector : </span>
        <span className='player-position-vec'>{playerPositionVec}</span>
      </div>
      <div className='webgl-content'>
        <div id='gameContainer'>
          <Unity unityContent={unityContent} />
        </div>
        <div className='footer'>
          <div className='webgl-logo' />
          <div className='fullscreen' onClick={handleFullScreenClicked} />
          <div className='title'>Space Shooter</div>
        </div>
      </div>
    </div>
  );
};

export default SpaceShooter;
