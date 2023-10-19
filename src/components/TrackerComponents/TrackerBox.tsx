"use client";
import { ClientBox } from "./ClientBox";
import { MemoBox } from "./MemoBox";
import { ProjectBox } from "./ProjectBox"

export type TTrackerBoxProps = {
    client: string,
    project: string,
    memo: string
}

export const TrackerBox = ({memo, project, client}: TTrackerBoxProps) => {
    return (
        <div className="border border-gray-500 bg-transparent flex flex-row justify-stretch">
            <div className="w-1/2">
                <MemoBox memo="Start work on kick."/>
            </div>
            <div className="w-1/2">
                <ProjectBox project="Twitch Dev"/>
            </div>
            <div className="w-1/2">
                <ClientBox client="Sportskred"/>
            </div>
        </div>
    )
}