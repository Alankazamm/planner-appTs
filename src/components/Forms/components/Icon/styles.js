import styled from 'styled-components';
export const IconWrapper = styled.span `
  position: absolute;
  right: ${props => props.iconIsInside === true ? '6.5vw' : '3.4vw'};
  display: flex;
  align-items: center;
  transition: all 0.2s ease-out;
`;
//# sourceMappingURL=styles.js.map