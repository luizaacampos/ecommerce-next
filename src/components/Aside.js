import styled from 'styled-components'
import Link from 'next/link'

const AsideElement = styled.aside`
    display: flex;
    width: 20vw;
    padding-top: 15px;
    flex-direction: column;
    text-align:center;
    font-size: 20px;
    border-right: 2px solid var(--dark);
    color: var(--black);
`;

const AElement = styled.a`
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        font-weight: bold;
    }
`;

export default function Aside() {
    return (
        <>
        <AsideElement>
            <Link href="/">
                <AElement>Todos os Produtos</AElement>
            </Link>
            <br />
            <Link href="/favoritos">
                <AElement>Favoritos</AElement>
            </Link>
            <br />
            <strong>Compre por categoria:</strong>
            <Link href="/televisores">
                <AElement>Televisores</AElement>
            </Link>
            <Link href="/celulares">
                <AElement>Celulares</AElement>
            </Link>
            <Link href="/lavaroupas">
                <AElement>Lava-roupas</AElement>
            </Link>
            <Link href="/notebooks">
                <AElement>Notebooks</AElement>
            </Link>
            <Link href="/cameras">
                <AElement>Câmeras Fotográficas</AElement>
            </Link>
        </AsideElement>
        </>
    )
}