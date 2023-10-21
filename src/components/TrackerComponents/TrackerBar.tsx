"use client";
import { TrackerButton } from "./TrackerButton";
// import { TrackerBox } from "./TrackerBox";

export const TrackerBar = () => {

    const handleOnClick = (buttonState: string) => {
        console.log("Button state: ", buttonState)
    }

    return (
        <div className={`border border-gray-500 flex flex-row justify-start`}>
            <TrackerButton handleOnClick={handleOnClick}/>
            {/* <TrackerBox memo="Working on flask project." client="Sportskred" project="Twitch dev"/> */}
        </div>
    )
}