import React from 'react'
import styled from 'styled-components'

import { cart } from './index'
import { products } from '../db.json'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Container from '../src/components/Container'


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

export default function Cart() {

    const total = []

    function getTotal(total, num) {
        return total + num
    }

    return (
        <>
        <Header />
        <Container>
          <ProductsContainer>
              <h1>Carrinho de compras</h1>
              {products.filter(product => cart.includes(product.id)).map(filteredProduct => {
                  total.push(filteredProduct.price)
                  return (
                      <Div key={filteredProduct.id}>
                        <Img src={filteredProduct.photo} />
                        <Info>
                            <h3>{filteredProduct.name}</h3> 
                            <p>Quantidade: 1</p> 
                            <p>Valor: R$ {filteredProduct.price.toFixed(2)}</p>
                        </Info>
                      </Div>
                  )
              })}
            <ActionDiv>
                <h1>TOTAL R$ {!total === [] ? total.reduce(getTotal).toFixed(2) : null}</h1>
                <Button>Fechar pedido</Button>
            </ActionDiv>
          </ProductsContainer>
        </Container>
        <Footer />
        </>
      )
}