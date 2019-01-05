import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 7rem;
    display: flex;
    color: ${props => props.theme.colorTextPrimary};
    font-size: 1.4rem;
    align-items: center;
    z-index: 9999;
`;

export default StyledHeader;