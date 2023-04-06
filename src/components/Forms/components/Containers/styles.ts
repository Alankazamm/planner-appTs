import styled from 'styled-components';

export const FormContainer = styled.div<{page: string}>`


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: ${({ page }) => page === 'login' ? '63vh' : '83vh'};
  width: ${({ page }) => page === 'login' ? '19.7vw' : '24.5vw'};
  `
  /* 901px;685 */