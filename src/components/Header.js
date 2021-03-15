import styled from 'styled-components'
import Link from 'next/link'
import {ShoppingCart} from '@styled-icons/heroicons-outline/ShoppingCart'

const HeaderElement = styled.header`
    background-color: var(--primary);
    text-align: center; 
    padding: 10px 50px;
    height: 80px;
    width: 100vw;
    color: var(--contrastText);
    border-bottom: 10px solid var(--dark);
    display: flex;
    justify-content: space-between;
    text-align: center;
    h1 {
        color: var(--secondary);
        margin: 0 0 0 100px;
        font-size: 50px;
    }
`;

const Cart = styled(ShoppingCart)`
    color: var(--dark);
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


