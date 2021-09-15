import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../../componets/Loader';

import MenuItem from '../../componets/MenuItem';

import { useOrder } from '../../context/OrderContext';

interface ActionParams {
  name?: string;
  price?: number;
}

const PizzaSize: React.FC = () => {
  const history = useHistory();
  const { setSize, order } = useOrder();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ActionParams[]>([] as ActionParams[]);
  const route = order.isRecommended ? '/' : '/pizza-flavor';

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/pizza-sizes');
      const { sizes } = data;
      setItems(sizes);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handlePizzaSize = ({ name, price }: ActionParams) => {
    if (name && price) {
      setSize({ name, price });
      history.push('/order-summary');
    }
  };

  return (
    <>
      {!loading && (
        <div className="container align-center">
          <h1>Selecione o Tamanho:</h1>
          {items.map(item => (
            <MenuItem
              key={item.name}
              item={item}
              action={() => {
                handlePizzaSize(item);
              }}
            />
          ))}
          <Link to={route}>
            <button className="back-button" type="button">
              Voltar
            </button>
          </Link>
        </div>
      )}
      {loading && <Loader />}
    </>
  );
};

export default PizzaSize;
