import styled from 'styled-components';
export const LogoutContainer = styled.div `
order: 4;
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-right: 12px;

&>img{
    margin-bottom: 12px;
    cursor: pointer;
}
div{
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
   
}

div> img{
    margin-right: 12px;
}
span{
    font-size: 17px;
line-height: 20px;
}
`;
