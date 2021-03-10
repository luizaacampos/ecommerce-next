import styled from 'styled-components'
import Link from 'next/link'
import {ShoppingCart} from '@styled-icons/heroicons-outline/ShoppingCart'

const HeaderElement = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center; 
    padding: 10px 50px;
    height: 80px;
    width: 100vw;
    color: ${({ theme }) => theme.colors.contrastText};
    border-bottom: 10px solid ${({ theme }) => theme.colors.dark};
    display: flex;
    justify-content: space-between;
    text-align: center;
    h1 {
        color: ${({ theme }) => theme.colors.secondary};
        margin: 0 0 0 100px;
        font-size: 50px;
    }
`;

const Cart = styled(ShoppingCart)`
    color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;
    margin-right: 80px;
`;

export default function Header() {
    return (
        <HeaderElement>
            <h1>BUY.</h1>
            <Link href="/cart">
                <Cart />
            </Link>
        </HeaderElement>
    )
    
}


