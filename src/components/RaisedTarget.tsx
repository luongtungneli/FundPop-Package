import React from 'react';
import { getFontStyles } from '../controller';
import "./RaisedTarget.css"

function RaisedTarget(props: {campaign:any}) {
  const {appBlockEditor} = props.campaign
  const {revenueTitleBlock: {backgroundColor, texts}} = appBlockEditor[0]

  const containerStyle = {
    backgroundColor: backgroundColor,
  }

  const raisedStyle = {
    fontFamily: texts[0].font,
    fontSize: texts[0].fontSize + "px",
    ...getFontStyles(texts[0].fontStyle),
    color: texts[0].textColor,
  }

  const targetStyle = {
    fontFamily: texts[1].font,
    fontSize: texts[1].fontSize + "px",
    ...getFontStyles(texts[1].fontStyle),
    color: texts[1].textColor,
  }

  return (
    <div style={containerStyle} className="raised-target-texts">
      <div style={raisedStyle} className="raised-text">
        Raised
      </div>
      <div style={targetStyle} className="target-text">
        Target
      </div>
    </div>
  );
}

export default RaisedTarget;
