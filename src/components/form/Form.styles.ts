import styled from "styled-components";

export const Form = styled.form<{page: string, hasError?:boolean}>`
  width: 473px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: ${({page, hasError}) => page === 'login' ? (hasError? '27vh': '21vh') : '56vh'};
  h2{
    font-size: 30px;
    margin-bottom: 3vh;
    color: #FFFFFF;
    font-weight: 500;
  }
  .errorDiv{ 
    width:379px;
    display: flex;
    justify-content: center;
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