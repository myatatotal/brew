import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles';

import { OrderProvider } from './context/OrderContext';

const App: React.FC = () => (
  <>
    <OrderProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </OrderProvider>
  </>
);
export default App;
