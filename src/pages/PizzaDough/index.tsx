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

const PizzaDough: React.FC = () => {
  const history = useHistory();
  const [items, setItems] = useState<ActionParams[]>([] as ActionParams[]);
  const { setDough } = useOrder();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/pizza-doughs');
      const { doughs } = data;
      setItems(doughs);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handlePizzaDough = ({ name, price }: ActionParams) => {
    if (name && price) {
      setDough({ name, price });
      history.push('/pizza-flavor');
    }
  };

  return (
    <>
      {!loading && (
        <div className="container align-center">
          <h1>Selecione a Massa:</h1>
          {items.map(item => (
            <MenuItem
              key={item.name}
              item={item}
              action={() => {
                handlePizzaDough(item);
              }}
            />
          ))}
          <Link to="/">
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

export default PizzaDough;
