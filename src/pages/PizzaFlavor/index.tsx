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

const PizzaFlavor: React.FC = () => {
  const history = useHistory();
  const { setFlavor } = useOrder();
  const [items, setItems] = useState<ActionParams[]>([] as ActionParams[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/pizza-flavors');
      const { flavors } = data;
      setItems(flavors);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handlePizzaFlavor = ({ name, price }: ActionParams) => {
    if (name && price) {
      setFlavor({ name, price });
      history.push('/pizza-size');
    }
  };

  return (
    <>
      {!loading && (
        <div className="container align-center">
          <h1>Selecione o Sabor:</h1>
          {items.map(item => (
            <MenuItem
              key={item.name}
              item={item}
              action={() => {
                handlePizzaFlavor(item);
              }}
            />
          ))}
          <Link to="/pizza-dough">
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

export default PizzaFlavor;
