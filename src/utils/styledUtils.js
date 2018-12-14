import { css } from 'styled-components';

export const devices = {

    sm: (...args) => css`
        @media only screen and (min-width: 576px) {
            ${css(...args)}
        }
    `,

    md: (...args) => css`
        @media only screen and (min-width: 768px) {
            ${css(...args)}
        }
    `,

    lg: (...args) => css`
        @media only screen and (min-width: 992px) {
            ${css(...args)}
        }
    `,

    xl: (...args) => css`
        @media only screen and (min-width: 1200px) {
            ${css(...args)}
        }
    `
};