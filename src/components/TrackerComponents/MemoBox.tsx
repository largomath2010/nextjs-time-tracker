"use client";
import ClockSvg from "../../assets/clockMemoIcon.svg"
import { IconBox } from "../GenericComponents/IconBox"

type TMemoBoxProps = {
    memo: string
}

export const MemoBox = ({memo}: TMemoBoxProps) => {
    return <IconBox text={memo} svg={ClockSvg} boxColor="transparent" boderColor="gray-500"/>
}