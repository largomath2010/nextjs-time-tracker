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
            <div className="flex items-center">
                <MemoBox className="h-10" memo={memo}/>
            </div>
            <div className="flex flex-row items-center justify-stretch">
                <ProjectBox className="h-10" project={project}/>
                <ClientBox className="h-10" client={client}/>
            </div>
        </div>
    )
}