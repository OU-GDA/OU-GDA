import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

export interface HeaderProps 
{
    src: StaticImageData;
    alt: string;
    fadeColor: string;
    overlay?: JSX.Element;
}

const Header = (props: HeaderProps) => {
    const ratio: number = props.src.width / props.src.height;

    return (
        <>
            <Image 
                src={props.src} 
                alt={props.alt}
                layout={'responsive'}
                width={100 + 'vw'}
                height={(100 / ratio) + 'vw'}
            />
            <div>
                {props.overlay}
            </div>
        </>
    );
}

export default Header;