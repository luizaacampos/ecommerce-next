import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { cart } from './index'
import { products } from '../db.json'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Container from '../src/components/Container'

export const valores = []
export const reducer = (accumulator, currentValue) => accumulator + currentValue

const StyledLink = styled(Link)`
    text-decoration: none;
  `;

const ProductsContainer = styled.div`
  width: 100vw;
  padding-top: 45px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.colors.contrastText};
  h1 {
      text-align: center;
  }
`;

const Div = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  display: flex;
  padding: 10px;
`;

const Img = styled.img`
    width: 30%;
    height: auto;

`;

const Info = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ActionDiv = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 20px 50px;
`;

const format = { minimumFractionDigits: 2 }

export default function Cart() {

    return (
        <>
        <Header />
        <Container>
          <ProductsContainer>
              <h1>Carrinho de compras</h1>
              {products.filter(product => cart.includes(product.id)).map(filteredProduct => {
                  valores.push(filteredProduct.price)
                  console.log(valores)
                  return (
                      <Div key={filteredProduct.id}>
                        <Img src={filteredProduct.photo} />
                        <Info>
                            <h3>{filteredProduct.name}</h3> 
                            <p>Quantidade: 1</p> 
                            <p>Valor: R$ {filteredProduct.price.toLocaleString('pt-BR', format)}</p>
                        </Info>
                      </Div>
                  )
              })}
            <ActionDiv>
                <h1>TOTAL R$ {valores !== [] ? valores.reduce(reducer, 0).toLocaleString('pt-BR', format) : null}</h1>
                <Button><StyledLink href="/pagamento">Fechar pedido</StyledLink></Button>
            </ActionDiv>
          </ProductsContainer>
        </Container>
        <Footer />
        </>
      )
}