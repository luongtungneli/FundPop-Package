import React from 'react';
import { getFontStyles } from '../controller';

function RaisedTarget({campaign}) {
  const {appBlockEditor} = campaign
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
    <div style={containerStyle} className="fp-raised-target-texts w-full flex py-2 px-5">
      <div style={raisedStyle} className="fp-raised-text ml-0">
        Raised
      </div>
      <div style={targetStyle} className="fp-target-text ml-auto mr-0">
        Target
      </div>
    </div>
  );
}

export default RaisedTarget;
