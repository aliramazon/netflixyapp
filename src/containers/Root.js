import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from '../store';
import DevTools from './DevTools';
import StyledContainer from '../styled/StyledContainer';
import GlobalStyle from '../GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/theme';
import App from '../components/App';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
   return (
       <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyledContainer>
                    <Router>
                        <App/>
                    </Router>
                    <DevTools/>
                    <GlobalStyle/>
                    <ToastContainer/>
                </StyledContainer>
            </ThemeProvider>
       </Provider>
   );
};

export default Root;