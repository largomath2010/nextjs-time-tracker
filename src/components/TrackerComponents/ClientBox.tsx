"use client";
import ClientSvg from "../../assets/clientBuildingIcon.svg"
import { IconBox } from "../GenericComponents/IconBox"

type TClientBoxProps = {
    client: string
}

export const ClientBox = ({client}: TClientBoxProps) => {
    return <IconBox text={client} svg={ClientSvg} boxColor="grey-500" boderColor="transparent"/>
}