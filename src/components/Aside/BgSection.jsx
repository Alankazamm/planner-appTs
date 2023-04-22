import logo from '/src/assets/svg/icon-link.svg';
import { BgWrapper } from './styles';
export const BgSection = () => {
    return (<BgWrapper>
            <a href="https://compass.uol/en/home/" target="_blank"><img alt="logo" src={logo}/> </a> 
        </BgWrapper>);
};
