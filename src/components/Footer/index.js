import styled from 'styled-components'

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.colors.dark};
    text-align: center; 
    padding: 10px;
    color: ${({ theme }) => theme.colors.contrastText};
`;

export default Footer