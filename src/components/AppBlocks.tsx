import React from 'react';
import TitleContainer from './TitleContainer';
import RaisedTarget from './RaisedTarget';
import RaisedTargetValue from './RaisedTargetValue';
import ProgressBar from './ProgressBar';
import LabelContainer from './LabelContainer';
import DividerContainer from './DividerContainer';
import TimeContainer from './TimeContainer';

function AppBlocks({data, price}) {
  const {backers, campaign} = data;

  return (
    <div className="fp-progress-container">
      <div id="fp-border-box">
        <TitleContainer campaign={campaign[0]}/>
        <div className='flex items-center justify-between flex-wrap'>
          <RaisedTarget campaign={campaign[0]}/>
          <RaisedTargetValue campaign={campaign[0]} price={price}/>
        </div>
        <ProgressBar campaign={campaign[0]}/>
        <LabelContainer campaign={campaign[0]} backer={backers}/>
      </div>
      <DividerContainer campaign={campaign[0]}/>
      <TimeContainer campaign={campaign[0]}/>
    </div>
  );
}

export default AppBlocks;
