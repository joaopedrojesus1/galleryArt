import { ImgHTMLAttributes } from "react";

export interface IHeader extends ImgHTMLAttributes<IHeader>{
    title: string,
    navOne: string,
    navTwo: string,
    navThree: string,
    navFour: string,
    
}