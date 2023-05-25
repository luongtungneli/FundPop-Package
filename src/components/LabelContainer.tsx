import React from 'react';
import { getFontStyles, getPercentageProgressBar } from '../controller';

function LabelContainer(props: {campaign:any, backer:number}) {
  const backerText = props.backer > 1 ? 'backers' : 'backer';
  const {funded, goal, appBlockEditor} = props.campaign;
  const {revenueSubValueBlock: {backgroundColor, texts}} = appBlockEditor[0]

  const containerStyle = {
    backgroundColor: backgroundColor,
  }

  const fundedStyle = {
    fontFamily: texts[0].font,
    fontSize: texts[0].fontSize + "px",
    ...getFontStyles(texts[0].fontStyle),
    color: texts[0].textColor,
    display: texts[0].hidden ? "none" : "flex",
  }

  const backerStyle = {
    fontFamily: texts[1].font,
    fontSize: texts[1].fontSize + "px",
    ...getFontStyles(texts[1].fontStyle),
    color: texts[1].textColor,
    display: texts[1].hidden ? "none" : "flex",
  }

  return (
    <div style={containerStyle} className="fp-lable flex items-center justify-between px-5">
      <div id="fp-funded-container">
        <div style={fundedStyle} className="fp-lable-item flex flex-row items-center gap-x-2">
          <p id="fp-percentage">{getPercentageProgressBar(funded, goal)}%</p>
          <span>funded</span>
        </div>
      </div>
      <div id="fp-backer-container">
        <div style={backerStyle} className="fp-lable-item flex flex-row items-center gap-x-2">
          <p id="fp-totalBackers">
            {props.backer}
          </p>
          <span id="fp-backer-text">{backerText}</span>
        </div>
      </div>
    </div>
  );
}

export default LabelContainer;
