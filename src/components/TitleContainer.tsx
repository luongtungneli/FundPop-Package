import React, {useState} from 'react';
import {getFontStyles} from '../controller';
import ShareModal from './ShareModal';
import "./TitleContainer.css"

function TitleContainer(props: {campaign:any}) {
  const [visible, setVisible] = useState(false);
  const {name, appBlockEditor} = props.campaign;
  const {
    headerBlock: {
      iconColor,
      backgroundColor,
      font,
      fontSize,
      fontStyle,
      textColor,
    },
  } = appBlockEditor[0];

  const abTitleStyle = {
    backgroundColor: backgroundColor,
  };

  const titleStyle = {
    fontFamily: font,
    fontSize: fontSize + 'px',
    ...getFontStyles(fontStyle),
    color: textColor,
  };

  return (
    <div
      style={abTitleStyle}
      id="ab-title-container"
    >
      <ShareModal
        name={name}
        visible={visible}
        closeModal={() => setVisible(false)}
      />
      <p
        style={titleStyle}
        className="campaign-title"
      >
        {name}
      </p>
      <div
        onClick={() => setVisible(true)}
        className="header-share-img"
        id="ab-share-block"
      >
        <svg
          id="sharing-icon-svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={iconColor}
        >
          <path
            id="fp-ad-share-icon"
            d="M15 12C14.193 12 13.463 12.324 12.923 12.844L7.963 10.363C7.978 10.243 8 10.125 8 10C8 9.875 7.978 9.757 7.963 9.637L12.923 7.156C13.463 7.676 14.193 8 15 8C16.654 8 18 6.654 18 5C18 3.346 16.654 2 15 2C13.346 2 12 3.346 12 5C12 5.125 12.022 5.243 12.037 5.363L7.077 7.844C6.52057 7.30357 5.77568 7.00088 5 7C3.346 7 2 8.346 2 10C2 11.654 3.346 13 5 13C5.807 13 6.537 12.676 7.077 12.156L12.037 14.637C12.022 14.757 12 14.875 12 15C12 16.654 13.346 18 15 18C16.654 18 18 16.654 18 15C18 13.346 16.654 12 15 12Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

export default TitleContainer;
