import styled from 'styled-components';
import { PageIdentifier } from './Header';





export const HeaderTextStyle:PageIdentifier = styled.div`
    color: #FFFFFF;
    width: ${(props: PageIdentifier) => props.page === "planner" ? "30.63vw" : "15.2vw"};
    height: ${(props: PageIdentifier) => props.page === "planner" ? "6vh" : "auto"};
    background: ${(props: PageIdentifier) => props.page === "planner" ? "#000000" : "unset"};
    border-radius: ${(props: PageIdentifier) => props.page === "planner" ? "0px 14px 15px 0px" : "unset"};
    padding-left: ${(props: PageIdentifier) => props.page === "planner" ? "24px" : "unset"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6.2vh;
    h1{
        font-size: ${(props: PageIdentifier) => props.page === "planner" ? "22px" : "60px"};
        font-weight: 400;
    }
    p{
        font-size: ${(props: PageIdentifier) => props.page === "planner" ? "20px" : "16px"};
    }

    @media (max-height: 920px) {
    h1{
        
        font-size: ${(props: PageIdentifier) => props.page === "planner" ? "22px" : "30px"};

    }
    p{
        font-size: ${(props: PageIdentifier) => props.page === "planner" ? "20px" : "12px"};
    }
        
}

`
