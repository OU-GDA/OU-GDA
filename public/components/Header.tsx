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

            <div className="overlay" style={{
                background:'linear-gradient(transparent 75%, ' + props.fadeColor + ')'
            }}/>

            <div className="overlay">
                {props.overlay}
            </div>
        </div>
    );
}

export default Header;