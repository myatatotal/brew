import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  .label {
    margin-bottom: 1em;
    margin-top: 0.7em;
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
