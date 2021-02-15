import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { products } from '../db.json'
import ProductsContainer from '../src/components/ProductsContainer'
import ProductDiv from '../src/components/ProductDiv'
import ProductImg from '../src/components/ProductImg'
import ProductInfo from '../src/components/ProductInfo'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
    <ProductsContainer>
      <h1>Produtos</h1>
      <div>
        {products.map((product) => {
          return (
            <ProductDiv>
              <ProductImg src={product.photo}></ProductImg>
              <ProductInfo>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h2>R$ {product.price}</h2>
                <Button>Adicionar ao carrinho</Button>
              </ProductInfo>
            </ProductDiv>
          )
        })}
      </div>
    </ProductsContainer>
    <Footer>Desenvolvido por Luiza Campos</Footer>
    </>
  )
}
