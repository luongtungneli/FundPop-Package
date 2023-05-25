import {useMoney} from '@shopify/hydrogen';
import React from 'react';
import { getFontStyles } from '../controller';

function RaisedTargetValue({campaign, price}) {
  const {funded, goal, goalMode, appBlockEditor} = campaign;
  const {revenueValueBlock: {backgroundColor, texts}} = appBlockEditor[0]
  const formatedPrice = useMoney(price);

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
    <div style={containerStyle} className="fp-raised-target-value flex w-full justify-between py-2 px-5">
      <h3 style={totalRaisedStyle} id="fp-totalRaised">
        {raisedText}
      </h3>
      <h3 style={totalTargetStyle} id="fp-totalTarget">
        {targetText}
      </h3>
    </div>
  );
}

export default RaisedTargetValue;
