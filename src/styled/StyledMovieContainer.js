import styled from 'styled-components';
import { devices } from '../utils/styledUtils';


const StyledMovieContainer = styled.section`
    background: ${props => props.theme.secondaryBg};
    width: 90%;
    height: 95vh;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;

    ${devices.md`
        width: 64rem;
        height: 39rem;
    `};
`;

export default StyledMovieContainer;