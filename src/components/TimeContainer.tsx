import React, {useState} from 'react';
import {useInterval} from 'react-use';
import {getFontStyles} from '../controller';

function TimeContainer({campaign}) {
  const {endTime, appBlockEditor} = campaign;
  const {
    timeBlock: {backgroundColor, texts},
  } = appBlockEditor[0];
  const [remainingTime, setRemainingTime] = useState(
    new Date(endTime).getTime() - new Date().getTime(),
  );

  useInterval(
    () => {
      setRemainingTime((val) => (val - 1000 > 0 ? val - 1000 : 0));
    },
    remainingTime ? 1000 : null,
  );

  const getCountdown = (timeLeft) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // compute
    const days = Math.floor(timeLeft / day);
    const hours = Math.floor((timeLeft % day) / hour);
    const minutes = Math.floor((timeLeft % hour) / minute);
    const seconds = Math.floor((timeLeft % minute) / second);

    return {days, hours, minutes, seconds};
  };

  const updateCountdown = (timeLeft) => {
    const {days, hours, minutes, seconds} = getCountdown(timeLeft);
    // Set values for countdown
    /* Set labels for time units */
    const dayStr =
      (days < 10 ? `0${days}` : days) + (days > 1 ? ' days : ' : ' day : ');
    const hourStr =
      (hours < 10 ? `0${hours}` : hours) +
      (hours > 1 ? ' hours : ' : ' hour : ');
    const minuteStr =
      (minutes < 10 ? `0${minutes}` : minutes) +
      (minutes > 1 ? ' minutes : ' : ' minute : ');
    const secondStr = (seconds < 10 ? `0${seconds}` : seconds) + ' second';

    const timeArray = (dayStr + hourStr + minuteStr + secondStr).split(' : ');

    let timeStr = timeArray[0] + ' : ' + timeArray[1];

    if (days === 0) {
      timeStr = timeArray[1] + ' : ' + timeArray[2];
      if (hours === 0) {
        timeStr = timeArray[2] + ' : ' + timeArray[3];
        if (minutes === 0) {
          timeStr = timeArray[3];
        }
      }
    }

    return timeStr;
  };

  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  const timeTextStyle = {
    fontFamily: texts[0].font,
    fontSize: texts[0].fontSize + 'px',
    ...getFontStyles(texts[0].fontStyle),
    color: texts[0].textColor,
  };

  const dayStyle = {
    fontFamily: texts[1].font,
    fontSize: texts[1].fontSize + 'px',
    ...getFontStyles(texts[1].fontStyle),
    color: texts[1].textColor,
  };

  return (
    <div>
      {remainingTime ? (
        <div
          style={containerStyle}
          className="flex flex-wrap justify-between px-5 pb-2 rounded-b-lg"
          id="fp-countdown"
        >
          <p
            style={timeTextStyle}
            className="mt-[18px] mb-[10px]"
            id="fp-time-text"
          >
            Time remaining:{' '}
          </p>
          <div
            style={dayStyle}
            className="items-baseline flex flex-row flex-wrap gap-x-2"
          >
            <p
              id="fp-span-days"
              className="mt-[18px] mb-[10px]"
            >
              {updateCountdown(remainingTime)}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TimeContainer;
