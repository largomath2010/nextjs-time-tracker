"use client";
import { ClassValue } from "clsx";
import { ClientBox } from "./ClientBox";
import { MemoBox } from "./MemoBox";
import { ProjectBox } from "./ProjectBox"
import { cn } from "@/utils/css";

export type TTrackerBoxProps = {
    client: string,
    project: string,
    memo: string,
    className?: ClassValue
}

export const TrackerBox = ({memo, project, client, className = ""}: TTrackerBoxProps) => {
    return (
        <div className={
            cn("border border-gray-300 shadow-lg bg-transparent flex flex-row justify-between items-center h-12", className)
        }>
            <div className="items-center flex-4">
                <MemoBox className="h-10" memo={memo}/>
            </div>
            <div className="flex flex-row flex-2 items-center justify-stretch">
                <ProjectBox className="h-8 px-2" project={project}/>
                <ClientBox className="h-8 py-0 px-2 ml-2" client={client}/>
            </div>
        </div>
    )
}