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
  text-align: center;
  animation: ${fadeIn} 0.5s;

  hr {
    max-width: 400px;
    border: 0;
    border-top: 1px solid #ababab;
    margin: auto;
  }

  .amount {
    text-align: right;
    max-width: 400px;
    margin: 10px auto;
    font-weight: bold;
  }

  button {
    max-width: 400px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    margin: 15px auto;
    cursor: pointer;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 1em;
    box-shadow: var(--box-shadow);
    transition: 0.2s;

    &:hover {
      transform: translateY(1px);
    }
  }
`;
