import styled from 'styled-components';
import { devices } from '../utils/styledUtils';


const StyledMovieContainer = styled.section`
    background: ${props => props.theme.secondaryBg};
    width: 90%;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    ${devices.md`
        width: 64rem;
        height: 42rem;
    `};
`;

export default StyledMovieContainer;