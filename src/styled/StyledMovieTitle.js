import styled from 'styled-components';

const StyledMovieTitle = styled.div`
    color: ${props => props.isLarge
        ? props.theme.colorWhite
        : props.theme.colorTextSecondary};
    margin-bottom: .4rem;
    font-size: ${props => props.isLarge ? '2.6rem' : '1.4rem'};
    width: ${props => (props.isLarge ? "auto" : props.theme.posterWidth)};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: ${props => (props.isLarge ? "wrap" : "nowrap")};
`;

export default StyledMovieTitle;