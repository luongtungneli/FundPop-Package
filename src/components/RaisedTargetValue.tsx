import {useMoney} from '@shopify/hydrogen';
import React from 'react';
import { getFontStyles } from '../controller';
import "./RaisedTargetValue.css"

function RaisedTargetValue(props: {campaign: any}) {
  const {funded, goal, goalMode, appBlockEditor, currencyUnit} = props.campaign;
  const {revenueValueBlock: {backgroundColor, texts}} = appBlockEditor[0]
  const formatedPrice = useMoney({amount: '1', currencyCode: currencyUnit || 'USD'});

  const raisedText = `${
    goalMode === 'currency' ? formatedPrice.currencySymbol : ''
  }${Intl.NumberFormat('en-US').format(funded)}`;
  const targetText = `${
    goalMode === 'currency' ? formatedPrice.currencySymbol : ''
  }${Intl.NumberFormat('en-US').format(goal)}`;

  const containerStyle = {
    backgroundColor: backgroundColor,
  }

  const totalRaisedStyle = {
    fontFamily: texts[0].font,
    fontSize: texts[0].fontSize + "px",
    ...getFontStyles(texts[0].fontStyle),
    color: texts[0].textColor,
  }

  const totalTargetStyle = {
    fontFamily: texts[1].font,
    fontSize: texts[1].fontSize + "px",
    ...getFontStyles(texts[1].fontStyle),
    color: texts[1].textColor,
  }

  return (
    <div style={containerStyle} className="raised-target-value">
      <h3 style={totalRaisedStyle} id="totalRaised">
        {raisedText}
      </h3>
      <h3 style={totalTargetStyle} id="totalTarget">
        {targetText}
      </h3>
    </div>
  );
}

export default RaisedTargetValue;
