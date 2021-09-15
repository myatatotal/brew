import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';
import OrderItem from './components/OrderItem';
import { formatPrice } from '../../util/format';
import Loader from '../../componets/Loader';

import { useOrder } from '../../context/OrderContext';

const OrderSummary: React.FC = () => {
  const history = useHistory();
  const { order, handlePoints } = useOrder();
  const [loading, setLoading] = useState(false);
  const amount = order.dough.price + order.flavor.price + order.size.price;

  const handleSubmit = async () => {
    const body = {
      flavor: order.flavor,
      dough: order.dough,
      size: order.size,
      isRecommended: order.isRecommended,
    };
    try {
      setLoading(true);
      const { data } = await api.post('/checkout', body);

      if (data.order.points) {
        handlePoints(data.order.points);
      }
      setLoading(false);
      history.push('/checkout');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <Container className="container">
      <h1>Resumo do Pedido:</h1>
      <hr />
      <OrderItem name={order.dough.name} price={order.dough.price} />
      <OrderItem name={order.flavor.name} price={order.flavor.price} />
      <OrderItem name={order.size.name} price={order.size.price} />
      <hr />
      <p className="amount">{formatPrice(amount / 100)}</p>
      {!loading && (
        <>
          <div>
            <button type="button" onClick={handleSubmit}>
              Finalizar Pedido
            </button>
          </div>
          <Link to="/pizza-size">
            <button className="back-button" type="button">
              Voltar
            </button>
          </Link>
        </>
      )}

      {loading && <Loader />}
    </Container>
  );
};

export default OrderSummary;
