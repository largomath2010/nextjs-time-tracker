"use client";
import { useReducer } from "react";
import StartIcon from "@/assets/startIcon.svg"

const ACTION_START = "start";
const ACTION_STOP = "stop";
const COLOR_STOP = "#1DA7EF";
const COLOR_START = "#F74040";
type TTrackerButtonColor = typeof COLOR_STOP | typeof COLOR_START;
type TTrackerButtonAction = typeof ACTION_START | typeof ACTION_STOP;
type TTrackerButtonState = {
    color: TTrackerButtonColor,
    isTracking: boolean,
    nextAction: TTrackerButtonAction
}
export type TTrackButtonProps = {
    handleOnClick: (action: TTrackerButtonAction) => void,
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


export const TrackerButton = ({handleOnClick}: TTrackButtonProps) => {

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

    return <StartIcon className="hover:scale-110" onClick={handleClick} />
}