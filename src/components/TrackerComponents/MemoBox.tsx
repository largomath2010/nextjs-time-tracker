"use client";
import ClockSvg from "../../assets/svg/clockMemoIcon.svg"
import { IconBox } from "../GenericComponents/IconBox"
import { ClassValue } from "clsx";
import { cn } from "@/utils/css";

type TMemoBoxProps = {
    memo: string,
    className?: ClassValue
}

export const MemoBox = ({memo, className = ""}: TMemoBoxProps) => {
    return <IconBox className={cn(className)} text={memo} svg={<ClockSvg/>} boxColor="transparent" boderColor="transparent"/>
}