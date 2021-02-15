import styled from 'styled-components'
import {ShoppingCart} from '@styled-icons/heroicons-outline/ShoppingCart'
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'

const HeaderElement = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center; 
    padding: 10px 50px;
    height: 80px;
    width: 100vw;
    color: ${({ theme }) => theme.colors.contrastText};
    border-bottom: 10px solid ${({ theme }) => theme.colors.dark};
    display: flex;
    justify-content: flex-end;
    input {
        padding: 15px;
        height: 40px;
    }
    button {
        height: 40px;
        width: 40px;
        margin-right: 30px;
    }
`;

const Cart = styled(ShoppingCart)`
    color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;
    align-items: flex-end;
`;

const Search = styled(SearchAlt)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.dark};
`;

export default function Header() {
    return (
        <HeaderElement>
            <input type="text"></input>
            <button><Search /></button>
            <Cart />
        </HeaderElement>
    )
    
}


