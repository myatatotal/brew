import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';
import Loader from '../../componets/Loader';

import MenuItem from '../../componets/MenuItem';

import { useOrder } from '../../context/OrderContext';

interface Recommended {
  dough: {
    name: string;
    price: number;
  };
  flavor: {
    name: string;
    price: number;
  };
  banner: {
    name: string;
    url: string;
    price: number;
  };
  points: number;
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { setIsRecommended, setIsNotRecommended } = useOrder();
  const [item, setItem] = useState<Recommended>({} as Recommended);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/recommendation');
      const { option } = data;
      setItem(option);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleOrderType = async () => {
    setIsRecommended(true, item.dough, item.flavor);
    history.push('/pizza-size');
  };

  const handleNewPizza = () => {
    setIsNotRecommended();
    history.push('/pizza-dough');
  };

  return (
    <>
      {!loading && (
        <Container className="container">
          <h1>Bem Vindo(a) ao Pizza Planet</h1>
          <div>
            <button type="button" onClick={handleNewPizza}>
              Montar a minha Pizza
            </button>
          </div>
          <p className="label">ou</p>
          {item.points && (
            <p className="label">
              Escolha a recomendação do dia e ganhe
              <strong>{` ${item.points} `}</strong>
              pontos!
            </p>
          )}
          {item.banner && (
            <MenuItem item={item.banner} action={handleOrderType} />
          )}
        </Container>
      )}
      {loading && <Loader />}
    </>
  );
};

export default Home;
