import React, { useState } from "react";
import { useInterval } from "react-use";
import { getFontStyles } from "../controller";
import "./TimeContainer.css";

function TimeContainer(props: { campaign: any }) {
    const { endTime, appBlockEditor } = props.campaign;
    const {
        timeBlock: { backgroundColor, texts },
    } = appBlockEditor[0];
    const [remainingTime, setRemainingTime] = useState(
        new Date(endTime).getTime() - new Date().getTime()
    );

    useInterval(
        () => {
            setRemainingTime((val) => (val - 1000 > 0 ? val - 1000 : 0));
        },
        remainingTime ? 1000 : null
    );

    const getCountdown = (timeLeft: number) => {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // compute
        const days = Math.floor(timeLeft / day);
        const hours = Math.floor((timeLeft % day) / hour);
        const minutes = Math.floor((timeLeft % hour) / minute);
        const seconds = Math.floor((timeLeft % minute) / second);

        return { days, hours, minutes, seconds };
    };

    const updateCountdown = (timeLeft: number) => {
        const { days, hours, minutes, seconds } = getCountdown(timeLeft);
        // Set values for countdown
        /* Set labels for time units */
        const dayStr =
            (days < 10 ? `0${days}` : days) +
            (days > 1 ? " days : " : " day : ");
        const hourStr =
            (hours < 10 ? `0${hours}` : hours) +
            (hours > 1 ? " hours : " : " hour : ");
        const minuteStr =
            (minutes < 10 ? `0${minutes}` : minutes) +
            (minutes > 1 ? " minutes : " : " minute : ");
        const secondStr = (seconds < 10 ? `0${seconds}` : seconds) + " second";

        const timeArray = (dayStr + hourStr + minuteStr + secondStr).split(
            " : "
        );

        let timeStr = timeArray[0] + " : " + timeArray[1];

        if (days === 0) {
            timeStr = timeArray[1] + " : " + timeArray[2];
            if (hours === 0) {
                timeStr = timeArray[2] + " : " + timeArray[3];
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
        fontSize: texts[0].fontSize + "px",
        ...getFontStyles(texts[0].fontStyle),
        color: texts[0].textColor,
    };

    const dayStyle = {
        fontFamily: texts[1].font,
        fontSize: texts[1].fontSize + "px",
        ...getFontStyles(texts[1].fontStyle),
        color: texts[1].textColor,
    };

    return (
        <div className="container">
            {remainingTime ? (
                <div style={containerStyle} id="countdown">
                    <p style={timeTextStyle} id="time-text">
                        Time remaining:{" "}
                    </p>
                    <div style={dayStyle} id="time">
                        <p id="spanDays" className="spanName">
                            {updateCountdown(remainingTime)}
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default TimeContainer;
