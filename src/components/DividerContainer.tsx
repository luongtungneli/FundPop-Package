import React from 'react';
import "./DividerContainer.css"

function DividerContainer(props:{campaign:any}) {
  const {appBlockEditor} = props.campaign
  const {dividerBlock: {backgroundColor, style, thickness, width, dividerColor}} = appBlockEditor[0]

  const containerStyle = {
    backgroundColor: backgroundColor,
  }

  const dividerStyle = {
    borderStyle: style,
    borderWidth: thickness+"px",
    width: width + "%",
    borderColor: dividerColor,
    display: 'block',
  }

  return (
    <div style={containerStyle} className="divider-container">
      <div style={dividerStyle} className="divider-line"></div>
    </div>
  );
}

export default DividerContainer;
