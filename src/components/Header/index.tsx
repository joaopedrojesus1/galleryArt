import React from "react";
import { IHeader } from "./interfaces"

export const Header: React.FC<IHeader> = ({title, alt, src, navOne, navTwo, navThree, navFour}) => {
    return(
        <div className="flex flex-row">
            <img alt={alt}/>
            <p>{navOne}</p>
            <p>{navTwo}</p>
            <p>{navThree}</p>
            <p>{navFour}</p>
        </div>
    )
}