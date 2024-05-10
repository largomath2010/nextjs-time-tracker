"use client";
import { useReducer } from "react";
import { ClassValue } from "clsx";
import { cn } from "@/utils/css";

const ACTION_START = "start";
const ACTION_STOP = "stop";
const COLOR_STOP = "#1DA7EF";
const COLOR_START = "#F74040";
type TTrackerButtonColor = typeof COLOR_STOP | typeof COLOR_START;
type TTrackerButtonAction = typeof ACTION_START | typeof ACTION_STOP;
type TTrackerButtonState = {
    color: TTrackerButtonColor,
    isTracking: boolean,
    nextAction: TTrackerButtonAction,
}
export type TTrackButtonProps = {
    handleOnClick: (action: TTrackerButtonAction) => void,
    className?: ClassValue
}

const reducer = (state: TTrackerButtonState, action: TTrackerButtonAction): TTrackerButtonState =>  {
    switch (action) {
      case ACTION_START:
        return {
            color: COLOR_START,
            isTracking: true,
            nextAction: ACTION_STOP
        }
      case ACTION_STOP:
        return {
            color: COLOR_STOP,
            isTracking: false,
            nextAction: ACTION_START
        }
      default:
        return state;
    }
};


export const TrackerButton = ({handleOnClick, className = ""}: TTrackButtonProps) => {

    const initialState: TTrackerButtonState = {
        color: COLOR_STOP,
        isTracking: false,
        nextAction: ACTION_START
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = () => {
        let nextAction = state.nextAction;
        dispatch(state.nextAction);
        handleOnClick(nextAction);
    }

    return (
        <svg 
            onClick={handleClick} width="80" height="80" viewBox="0 0 80 80" version="1.1"
            className={cn("hover:scale-110", className)}
        >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle fill={state.color} cx="40" cy="40" r="40"></circle>
                <polygon fill="#fff" points="34 30 52 40.8341139 34 51"></polygon>
            </g>
        </svg>
    )
}