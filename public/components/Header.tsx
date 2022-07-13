import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

export interface HeaderProps 
{
    src: StaticImageData;
    alt: string;
    overlay?: JSX.Element;
}

const Header = (props: HeaderProps) => {
    return (
        <>
            <Image 
                src={props.src} 
                alt={props.alt}
            />

            {props.overlay}
        </>
    );
}

export default Header;