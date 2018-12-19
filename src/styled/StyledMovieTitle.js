import styled from 'styled-components';

const StyledMovieTitle = styled.div`
    color: ${props => props.theme.colorTextSecondary};
    margin-bottom: .4rem;
    font-size: 1.4rem;
    width: ${props => props.theme.posterWidth};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export default StyledMovieTitle;