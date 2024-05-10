"use client";
import ProjectSvg from "../../assets/svg/projectFolderIcon.svg"
import { IconBox } from "../GenericComponents/IconBox"
import { ClassValue } from "clsx";
import { cn } from "@/utils/css";

type TProjectBoxProps = {
    project: string,
    className?: ClassValue
}

export const ProjectBox = ({project, className = ""}: TProjectBoxProps) => {
    return <IconBox className={cn(className)} text={project} svg={<ProjectSvg/>} boxColor="transparent" boderColor="transparent"/>
}