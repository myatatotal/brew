import React from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from '../../context/OrderContext';
import { Container } from './styles';

const Checkout: React.FC = () => {
  const { points } = useOrder();

  return (
    <Container className="container align-center">
      <div className="card">
        <div className="card-content">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/complete+done+green+success+valid+icon-1320183462969251652.png"
            alt="success"
          />
          <h1>Sucesso!</h1>
          <h2>Já estamos preparando o seu pedido.</h2>

          <Link to="/">
            <button className="success-button" type="button">
              Fazer Novo Pedido
            </button>
          </Link>
        </div>

        {points > 0 && (
          <div className="points">
            <h3>
              Você ganhou
              <span>{` + ${points} `}</span>
              pontos!
            </h3>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Checkout;
