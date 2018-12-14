import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import DevTools from './DevTools';
import StyledContainer from '../components/StyledContainer';
import GlobalStyle from '../GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/theme';
import App from '../components/App';

const Root = () => {
   return (
       <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyledContainer>
                    <App/>
                    <DevTools/>
                    <GlobalStyle/>
                </StyledContainer>
            </ThemeProvider>
       </Provider>
   );
};

export default Root;