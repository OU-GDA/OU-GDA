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
        <div className="layered-container" style={{height:'75vh'}}>
            <Image 
                src={props.src} 
                alt={props.alt}
                layout={'responsive'}
                width={100 + 'vw'}
                height={(100 / ratio) + 'vw'}
            />

            <div className="overlay">
                {props.overlay}

                <div className="overlay" style={{
                    width:'100%', 
                    height:'100%', 
                    background:'linear-gradient(transparent, ' + props.fadeColor + ' 90%)'
                }}/>
            </div>
        </div>
    );
}

export default Header;