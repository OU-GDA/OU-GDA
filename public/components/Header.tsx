import { StaticImageData } from "next/image";

export interface HeaderProps 
{
    src: StaticImageData;
    fadeColor: string;
    overlay?: JSX.Element;
}

const Header = (props: HeaderProps) => {
    return (
        <div 
            className="layered-container" 
            style={{height:'75vh', 
            backgroundImage:'url(' + props.src.src +')'}}
        >

        {/** Gradient Fade */}
            <div className="overlay" style={{
                background:'linear-gradient(transparent 75%, ' + props.fadeColor + ')'
            }}/>

        {/** Passed Overlay Content */}
            <div className="overlay">
                {props.overlay}
            </div>
        </div>
    );
}

export default Header;