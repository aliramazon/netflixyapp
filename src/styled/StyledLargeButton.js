import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledLargeButton = styled.button`
    border: 0;
    border-radius: .5rem;
    color: ${props => props.theme.colorWhite};
    width: 100%;
    height: 5rem;
    margin: 0 auto;
    display: block;
    background: ${props => props.theme.colorPink};
    font-size: 1.4rem;
    transition: all .5s;
    outline: none;

    ${devices.md`
        width: 65%;
    `};

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.colorRed}
    };
`;

export default StyledLargeButton;