import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  text-align: left;
  padding: 10px 5px;
  max-width: 400px;
  min-height: 70px;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  margin: 15px auto;
  cursor: pointer;

  animation: ${fadeIn} 0.5s;
  transition: 0.2s;

  &:hover {
    transform: translateX(2px);
  }

  img {
    max-width: 70px;
    max-height: 70px;
    margin-right: 15px;
  }

  p,
  strong {
    margin-bottom: 0.5em;
    word-break: break-word;
  }

  .price {
    font-size: 0.8em;
  }
`;
