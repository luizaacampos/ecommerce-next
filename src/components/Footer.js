import styled from 'styled-components'

const FooterElement = styled.footer`
    background-color: var(--primary);
    text-align: center; 
    padding: 10px;
    width: 100vw;
    color: var(--contrastText);
    border-top: 20px solid var(--dark);
`;

export default function Footer() {
    return (
        <FooterElement>Desenvolvido por Luiza Campos</FooterElement>
    )
}