import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/svg/icon-link.svg'
import { BgWrapper } from './BgSection.styles';

export const BgSection = () => {
    let navigate = useNavigate();
    return (
        <BgWrapper>
            <a href="https://compass.uol/en/home/"  target="_blank"><img alt="logo" src={logo} /> </a> 
        </BgWrapper>
    )
}