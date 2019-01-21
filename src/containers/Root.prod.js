import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store, { persiststore } from '../store';
import StyledContainer from '../styled/StyledContainer';
import GlobalStyle from '../GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import theme from '../constants/theme';
import App from '../components/App';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
   return (
       <Provider store={store}>
            <PersistGate persistor={persiststore} loading={null}>
                <ThemeProvider theme={theme}>
                    <StyledContainer>
                        <Router>
                            <App/>
                        </Router>
                        <GlobalStyle/>
                        <ToastContainer/>
                    </StyledContainer>
                </ThemeProvider>
            </PersistGate>
       </Provider>
   );
};

export default Root;