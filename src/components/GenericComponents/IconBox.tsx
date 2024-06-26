import { ReactElement } from 'react';
import { ClassValue } from 'clsx';
import { cn } from '@/utils/css';


type TSplitDistance = 1 | 2 | 3 | 4 | 5;

type TIconBoxProps = {
    boderColor?: string,
    boxColor?: string,
    text: string,
    splitDistance?: TSplitDistance,
    svg: ReactElement,
    className?: ClassValue

}

export const IconBox = (
    {
        boderColor = "gray-100",
        boxColor = "transparent",
        text,
        splitDistance = 2,
        svg,
        className = ""
    }: TIconBoxProps
) => {
    const svgComponent = svg;
    return (
        <div className={
            cn(
                `border border-${boderColor} bg-${boxColor} flex flex-row justify-start items-center flex-shrink-1 py-1 px-2`,
                className
            )
        }>
            <div className={`h-full mr-${splitDistance} flex items-center justify-center`}>{svg}</div>
            <div className="h-full flex items-center justify-center"><span className="text-base truncate">{text}</span></div>
        </div>
    )
}
