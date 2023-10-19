"use client";
import ProjectSvg from "../../assets/projectFolderIcon.svg"
import { IconBox } from "../GenericComponents/IconBox"

type TProjectBoxProps = {
    project: string
}

export const ProjectBox = ({project}: TProjectBoxProps) => {
    return <IconBox text={project} svg={ProjectSvg} boxColor="transparent" boderColor="gray-500"/>
}