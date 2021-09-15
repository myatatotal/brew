import React from 'react';
import { formatPrice } from '../../util/format';

import { Container } from './styles';

interface ActionParams {
  name?: string;
  url?: string;
  price?: number;
}

interface Props {
  action?({ name, price }: ActionParams): void;
  item: ActionParams;
}

const MenuItem: React.FC<Props> = ({ action, item }) => {
  const handleAction = () => {
    if (action) action({});
  };

  return (
    <Container onClick={handleAction}>
      <img src={item.url} alt={item.name} />
      <div>
        <p>
          <strong>{item.name}</strong>
        </p>
        {item.price && (
          <p>
            <strong className="price">{formatPrice(item.price / 100)}</strong>
          </p>
        )}
      </div>
    </Container>
  );
};

export default MenuItem;
