import React from "react";
import './index.css';
import { IFooter } from "./interfaces"

export const Footer: React.FC<IFooter> = ({title, src, alt}) => {
    return(
        <footer>
            <img src={src} alt={alt} />
            <h1>{title}</h1>
        </footer>
    )
}