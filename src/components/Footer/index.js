import styled from 'styled-components'

const FooterElement = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center; 
    padding: 10px;
    width: 100vw;
    color: ${({ theme }) => theme.colors.contrastText};
    border-top: 20px solid ${({ theme }) => theme.colors.dark};
`;

export default function Footer() {
    return (
        <FooterElement>Desenvolvido por Luiza Campos</FooterElement>
    )
}