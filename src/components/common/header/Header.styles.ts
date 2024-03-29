import styled from 'styled-components';
import { pageIdentifier } from './Header';





export const HeaderTextStyle = styled.div`
    color: #FFFFFF;
    width: ${(props: pageIdentifier) => props.page === "dashboard" ? "30.63vw" : "15.6vw"};
    height: ${(props: pageIdentifier) => props.page === "dashboard" ? "6vh" : "auto"};
    background: ${(props: pageIdentifier) => props.page === "dashboard" ? "#000000" : "unset"};
    border-radius: ${(props: pageIdentifier) => props.page === "dashboard" ? "0px 14px 15px 0px" : "unset"};
    padding-left: ${(props: pageIdentifier) => props.page === "dashboard" ? "24px" : "unset"};
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    h1{
        font-size: ${(props: pageIdentifier) => props.page === "dashboard" ? "22px" : "60px"};
        font-weight: 400;
    }
    p{
        font-size: ${(props: pageIdentifier) => props.page === "dashboard" ? "20px" : "16px"};
        font-weight: 400;
    }

    @media (max-height: 920px) {
    h1{
        
        font-size: ${(props: pageIdentifier) => props.page === "dashboard" ? "22px" : "30px"};

    }
    p{
        font-size: ${(props: pageIdentifier) => props.page === "dashboard" ? "20px" : "12px"};
    }
        
}

`
