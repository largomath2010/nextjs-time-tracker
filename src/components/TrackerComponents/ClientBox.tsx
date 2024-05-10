"use client";
import { ClassValue } from "clsx";
import ClientSvg from "../../assets/svg/clientBuildingIcon.svg"
import { IconBox } from "../GenericComponents/IconBox"
import { cn } from "@/utils/css";

type TClientBoxProps = {
    client: string,
    className?: ClassValue
}

export const ClientBox = ({client, className = ""}: TClientBoxProps) => {
    return <IconBox className={cn(className)} text={client} svg={<ClientSvg/>} boxColor="gray-100" boderColor="gray-300"/>
}