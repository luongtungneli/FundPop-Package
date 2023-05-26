import React from 'react';
import {getPercentageProgressBar} from '../controller';
import "./ProgressBar.css"

function ProgressBar(props: {campaign:any}) {
  const {funded, goal, appBlockEditor} = props.campaign;
  const {
    progressBarBlock: {blockBackgroundColor, backgroundColor, size, progressColor},
  } = appBlockEditor[0];
  const percentage = getPercentageProgressBar(funded, goal);
  const progressWidth = percentage
    ? percentage > 100
      ? '100%'
      : percentage > 10
      ? `${percentage}%`
      : '10%'
    : '0%';

  const containerStyle = {
    backgroundColor: blockBackgroundColor,
  };

  const progressStyle = {
    backgroundColor: backgroundColor,
    height: `${size === 'small' ? '8px' : size === 'medium' ? '16px' : '32px'}`,
  };

  const progressBarStyle = {
    backgroundColor: progressColor,
    height: `${size === 'small' ? '8px' : size === 'medium' ? '16px' : '32px'}`,
    width: progressWidth,
  }

  return (
    <div style={containerStyle} className="container-progress-bar">
      <div style={progressStyle} className="progress-bar">
        <div style={progressBarStyle} id="progress-bar__bar"/>
      </div>
    </div>
  );
}

export default ProgressBar;
