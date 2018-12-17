import styled from 'styled-components';
import { devices } from '../utils/styledUtils';


const StyledMovieContainer = styled.section`
    background: ${props => props.theme.secondaryBg};
    width: 90%;
    height: 39rem;
    border-radius: 1.5rem;

    ${devices.md`
        width: 64rem;
        height: 39rem;
    `};
`;

export default StyledMovieContainer;