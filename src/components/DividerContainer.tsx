import React from 'react';

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
    <div style={containerStyle} className="fp-divider-container w-full flex items-center justify-center py-2">
      <div style={dividerStyle} className="fp-divider-line h-px w-full"></div>
    </div>
  );
}

export default DividerContainer;
