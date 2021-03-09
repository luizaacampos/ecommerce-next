import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { products } from '../db.json'
import { favorites } from './index'
import ProductsContainer from '../src/components/ProductsContainer'
import ProductDiv from '../src/components/ProductDiv'
import ProductImg from '../src/components/ProductImg'
import ProductInfo from '../src/components/ProductInfo'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Aside from '../src/components/Aside'
import Container from '../src/components/Container'

const format = { minimumFractionDigits: 2 }


export default function Home() {
  return (
    <>
    <Header></Header>
    <Container>
      <Aside></Aside>
      <ProductsContainer>
      <h1>Seus produtos favoritos</h1>
      {products.filter(product => favorites.includes(product.id)).map(filteredProduct => {
           return (
            <ProductDiv key={filteredProduct.id}>
                <ProductImg src={filteredProduct.photo}></ProductImg>
                <ProductInfo>
                  <h1>{filteredProduct.name}</h1>
                  <p>{filteredProduct.description}</p>
                  <h2>R$ {filteredProduct.price.toLocaleString('pt-BR', format)}</h2>
                  <Button>Adicionar ao carrinho</Button>
                </ProductInfo>
              </ProductDiv>
           )
       })}
      </ProductsContainer>
    </Container>
    <Footer />
    </>
  )
}

