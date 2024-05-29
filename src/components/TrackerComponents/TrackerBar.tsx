"use client";
import { TrackerButton } from "./TrackerButton";
import { TrackerBox } from "./TrackerBox";

export const TrackerBar = () => {

    const handleOnClick = (buttonState: string) => {
        console.log("Button state: ", buttonState)
    }

    return (
        <div className={`flex flex-row justify-stretch items-center h-12 border-x-1 mt-4 w-full`}>
            <div className="h-full flex flex-row justify-start items-center mr-4">
                <TrackerButton handleOnClick={handleOnClick}/>
            </div>
            <div className="w-full h-full flex flex-row justify-start items-center">
                <TrackerBox className="w-full ml-2 px-2 py-0 h-48px" memo="Working on flask project." client="Sportskred" project="Twitch dev"/>
            </div>
        </div>
    )
}