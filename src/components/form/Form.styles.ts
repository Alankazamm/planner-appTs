import styled from "styled-components";

export const Form = styled.form<{page: string, hasError?:boolean}>`
  width: 473px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: ${({ page, hasError }) => page === 'login' ? (hasError ? '32vh' : '21vh') : '56vh'};
  margin-top: ${({hasError}) => hasError ? '11vh' : '0vh'};
  h2{
    font-size: 30px;
    margin-bottom: 3vh;
    color: #FFFFFF;
    font-weight: 500;
  }
  .errorDiv{ 
    height:100px;
    width:379px;
    display: flex;
    justify-content: flex-start;
    margin-left: 45px;
    
  }
  .error{
    color: #E9B425;
    font-size: 16px;
    width: 283px;
    margin-top: 28px;
    margin-bottom: 7px;
    text-align: center;
  }
`;