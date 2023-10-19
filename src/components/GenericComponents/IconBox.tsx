import { ReactSVGElement } from 'react';

type TSplitDistance = 1 | 2 | 3 | 4 | 5;

type TIconBoxProps = {
    boderColor?: string,
    boxColor?: string,
    text: string,
    splitDistance?: TSplitDistance
    svg: ReactSVGElement;
}

export const IconBox = (
    {
        boderColor = "gray-100",
        boxColor = "transparent",
        text,
        splitDistance = 2,
        svg
    }: TIconBoxProps
) => {
    const svgComponent = svg;
    return (
        <div className={`border border-${boderColor} bg-${boxColor} flex flex-row justify-start flex-shrink-1 py-1 px-2`}>
            <div className={`h-full mr-${splitDistance}`}>{svg}</div>
            <div className="text-base">{text}</div>
        </div>
    )
}
