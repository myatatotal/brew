import React, { createContext, useContext, useCallback, useState } from 'react';

interface OrderContextState {
  dough: {
    name: string;
    price: number;
  };
  flavor: {
    name: string;
    price: number;
  };
  size: {
    name: string;
    price: number;
  };
  isRecommended: boolean;
}

interface OrderOptions {
  name: string;
  price: number;
}

interface OrderContextData {
  order: OrderContextState;
  points: number;
  isRecommended: boolean;
  setIsRecommended(
    isRecommended: boolean,
    dough: OrderOptions,
    flavor: OrderOptions,
  ): void;
  setDough(dough: OrderOptions): void;
  setFlavor(flavor: OrderOptions): void;
  setSize(size: OrderOptions): void;
  setIsNotRecommended(): void;
  handlePoints(points: number): void;
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

const OrderProvider: React.FC = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [order, setOrder] = useState<OrderContextState>({
    isRecommended: false,
    dough: {
      name: '',
      price: 0,
    },
    flavor: {
      name: '',
      price: 0,
    },
    size: {
      name: '',
      price: 0,
    },
  } as OrderContextState);

  const setIsRecommended = useCallback(
    (isRecommended, dough, flavor) => {
      setOrder({ ...order, isRecommended, flavor, dough });
    },
    [order],
  );

  const setIsNotRecommended = useCallback(() => {
    setOrder({ ...order, isRecommended: false });
    setPoints(0);
  }, [order]);

  const setDough = useCallback(
    dough => {
      setOrder({ ...order, dough });
    },
    [order],
  );
  const setFlavor = useCallback(
    flavor => {
      setOrder({ ...order, flavor });
    },
    [order],
  );
  const setSize = useCallback(
    size => {
      setOrder({ ...order, size });
    },
    [order],
  );
  const handlePoints = useCallback(newPoints => {
    setPoints(newPoints);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        order,
        points,
        isRecommended: false,
        setIsRecommended,
        setDough,
        setFlavor,
        setSize,
        setIsNotRecommended,
        handlePoints,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

function useOrder(): OrderContextData {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be within an OrderProvider');
  }
  return context;
}

export { OrderProvider, useOrder };
