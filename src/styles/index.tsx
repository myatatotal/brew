import { createGlobalStyle, keyframes } from 'styled-components';

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

export default createGlobalStyle`

  :root{
    --box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    --primary-color: #1ba39c;
    --danger-color: #d64541;
  }

  *{
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    outline: 0;
    color: #1b1b1b;
    box-sizing: border-box;
  }

  h1, h2, h3{
    margin-bottom: 1em;
    animation: ${fadeIn} 0.5s;
  }

  a{
    color: #4183d7;
  }

  .container{
    max-width: 900px;
    margin: auto;
  }

  .align-center{
    text-align: center;
  }

  button.back-button{
    max-width: 400px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    margin: 15px auto;
    cursor: pointer;
    border: 2px solid var(--danger-color);
    background: transparent;
    color: var(--danger-color);
    font-size: 1em;
    box-shadow: none;
    transition: 0.2s;

    &:hover {
      transform: translateY(1px);
    }
  }
  button.success-button{
    max-width: 400px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    margin: 15px auto;
    cursor: pointer;
    border: 2px solid var(--primary-color);
    background: transparent;
    color: var(--primary-color);
    font-size: 1em;
    box-shadow: none;
    transition: 0.2s;

    &:hover {
      transform: translateY(1px);
    }
  }

  #root{
    padding: 60px 15px;
  }

`;
