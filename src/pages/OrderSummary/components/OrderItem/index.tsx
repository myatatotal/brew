import React from 'react';
import { formatPrice } from '../../../../util/format';
import { Container } from './styles';

interface Props {
  name: string;
  price: number;
}

const OrderItem: React.FC<Props> = ({ name, price }) => {
  return (
    <Container>
      <p>{name}</p>
      <p>{formatPrice(price / 100)}</p>
    </Container>
  );
};

export default OrderItem;
