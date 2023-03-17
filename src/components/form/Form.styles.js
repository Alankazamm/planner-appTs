import styled from "styled-components";
export const Form = styled.form `
  width: 473px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: ${({ page }) => page === 'login' ? '32vh' : '56vh'};
  margin-top: '11vh';
  gap: 1vh;
  //change position of date input webkit icon
  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
    margin: auto 0;
   border-radius: 50%;
    background-color: #E0E0E0;
    font-size: 20px;
    cursor: pointer;
  }
 
  

  
  h2{
    font-size: 30px;
    margin-bottom: 3vh;
    color: #FFFFFF;
    font-weight: 500;
  }
  .errorDiv{ 
    height:100px;
    width:379px;
    display:flex;
    opacity: ${({ hasError }) => hasError ? '1' : '0'};
    justify-content: flex-start;
    margin-left: 45px;
    transition: all 0.11s ease-in-out;
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
