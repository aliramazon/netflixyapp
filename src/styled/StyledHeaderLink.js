import styled from 'styled-components';

const StyledHeaderLink = styled.a`
    color: inherit;
    text-decoration: none;
    margin-left: auto;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        color: ${props => props.theme.colorWhite}
    }
`;

export default StyledHeaderLink;