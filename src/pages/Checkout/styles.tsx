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
  .card {
    animation: ${fadeIn} 0.5s;

    .card-content {
      padding: 25px;
    }
    box-shadow: var(--box-shadow);
    max-width: 600px;
    margin: auto;
    border-radius: 5px;
    img {
      width: 70px;
      margin-bottom: 15px;
    }

    .points {
      width: 100%;
      background: var(--primary-color);
      padding: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      h3 {
        color: #fff;
      }
    }
  }

  span {
    font-size: 1.5em;
    color: #fff;
  }
`;
