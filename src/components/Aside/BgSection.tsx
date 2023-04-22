import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/svg/icon-link.svg'
import { BgWrapper } from './styles';
import * as React from "react";
export const BgSection = () => {
    return (
        <BgWrapper>
            <a href="https://compass.uol/en/home/"  target="_blank"><img alt="logo" src={logo} /> </a> 
        </BgWrapper>
    )
}