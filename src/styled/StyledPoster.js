import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledPoster = styled.img`
    width: ${props => props.isExpanded
        ? props.theme.posterWidthExpanded
        : props.theme.posterWidth};

    height: ${props => props.isExpanded
        ? props.theme.posterHeightExpanded
        :  props.theme.posterHeight};

    border-radius: .4rem;

    ${devices.md`
        position: ${props => (props.isExpanded ? "absolute" : "initial")};
        top: ${props => (props.isExpanded ? "-50%" : "initial")};
        left: ${props => (props.isExpanded ? "-20%" : "initial")};
    `}
`;

export default StyledPoster;