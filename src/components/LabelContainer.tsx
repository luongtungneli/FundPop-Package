import React from 'react';
import { getFontStyles, getPercentageProgressBar } from '../controller';
import "./LabelContainer.css"

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
    <div style={containerStyle} className="lable">
      <div id="funded-container">
        <div style={fundedStyle} className="lable-item">
          <p id="percentage">{getPercentageProgressBar(funded, goal)}%</p>
          <span>funded</span>
        </div>
      </div>
      <div id="backer-container">
        <div style={backerStyle} className="lable-item">
          <p id="totalBackers">
            {props.backer}
          </p>
          <span id="backer-text">{backerText}</span>
        </div>
      </div>
    </div>
  );
}

export default LabelContainer;
