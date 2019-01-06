import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.span`
  width: 35px;
  height: 35px;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-left-color: rgba(3, 155, 229, 1);
  border-top-color: rgba(3, 155, 229, 1);
  border-radius: 50%;
  display: inline-block;
  margin: 0 auto;
  animation: ${rotate360} 600ms infinite linear;
`;

export default StyledLoader;