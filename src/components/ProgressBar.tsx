import React from 'react';
import {getPercentageProgressBar} from '../controller';

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
    <div style={containerStyle} className="fp-container-progress-bar py-2 px-5">
      <div style={progressStyle} className="fp-progress-bar w-full h-2 rounded z-1">
        <div style={progressBarStyle} id="fp-progress-bar__bar" className='h-full z-2 rounded'>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
