import { ReactElement } from 'react';
import { ClassValue } from 'clsx';
import { cn } from '@/utils/css';
import Link from 'next/link';

type TSplitDistance = 1 | 2 | 3 | 4 | 5;

type TIconBoxProps = {
    boxColor?: string,
    text: string,
    splitDistance?: TSplitDistance,
    svg: ReactElement,
    className?: ClassValue
    href?: string
}

export const SidebarBox = (
    {
        boxColor = "transparent",
        text,
        splitDistance = 4,
        svg,
        className = "",
        href = "#"
    }: TIconBoxProps
) => {
    const svgComponent = svg;
    return (
        <div className={
            cn(
                `bg-${boxColor} flex flex-row justify-start items-center flex-shrink-1 py-1 px-2 pr-4`,
                className
            )
        }>
            <div className={`h-full mr-${splitDistance} flex items-center justify-center`}>{svg}</div>
            <div className="h-full flex items-center justify-center">
                <Link href={href}>
                    <span className="text-base truncate">{text}</span>
                </Link>
            </div>
        </div>
    )
}
