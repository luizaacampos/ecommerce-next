import React, { useState } from 'react'
import styled from 'styled-components'
import {StarFill} from '@styled-icons/bootstrap/StarFill'
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'

import { products } from '../db.json'
import ProductsContainer from '../src/components/ProductsContainer'
import ProductDiv from '../src/components/ProductDiv'
import ProductImg from '../src/components/ProductImg'
import ProductInfo from '../src/components/ProductInfo'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Aside from '../src/components/Aside'
import Container from '../src/components/Container'

export const cart = []
export const favorites = []

const SearchDiv = styled.div`
  height: 50px;
  text-align: center;
  
  padding-top: 10px;
  
  input {
    height: 30px;
    padding-right: 15px;
    border: 0;
  }
  button {
    height: 30px;
    width: 30px;
    border: 0;
    background-color: var(--dark);
    border-radius: 0 5px 5px 0;
    transform: translate(0, -3%);
  }
`;

const Search = styled(SearchAlt)`
    cursor: pointer;
    color: var(--primary);
`;

const ButtonsDiv = styled.div`
  display: flex;
`;

let Star = styled(StarFill)`
  color: var(--gray);
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;
  &:active {
    color: var(--yellow);
  }
`;

export default function Home() {

  const [search, setSearch] = useState(null)
  const [searching, setSearching] = useState('')
  // const [active, setActive] = useState(false)
  
  function getSearch(event) {
    setSearching(event.target.value)
  }

  function handleSearch(event) {
    event.preventDefault()
    setSearch(searching)
  }

  function handleAddToFavorites(productId)  {
    
    if (favorites.includes(productId)) {
      alert('Esse produto já é um favorito')
      return
    } else {
      favorites.push(productId)
      // setActive(true)
      alert('Produto adicionado aos favoritos')
      // this.style.color = `${({ theme }) => theme.colors.yellow}`
    } 
  }

  function handleAddToCart(productId) {
    cart.push(productId)
    alert('Produto adicionado ao carrinho de compras!')
  }

  const format = { minimumFractionDigits: 2 }

  return (
    <>
    <Header />
    <SearchDiv>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={getSearch} placeholder="Pesquise por um produto"></input>
        <button type="submit"><Search /></button>
      </form>
    </SearchDiv>
    <Container>
      <Aside />
      <ProductsContainer>
          {search && products.filter(product => (product.name.toLowerCase()).includes(search.toLowerCase())).map(filteredProduct => {
            return (
            <ProductDiv key={filteredProduct.id}>
                <ProductImg src={filteredProduct.photo}></ProductImg>
                <ProductInfo>
                  <h1>{filteredProduct.name}</h1>
                  <p>{filteredProduct.description}</p>
                  <h2>R$ {filteredProduct.price.toLocaleString('pt-BR', format)}</h2>
                  <Button onClick={() => handleAddToCart(filteredProduct.id)}>Adicionar ao carrinho</Button>
                </ProductInfo>
              </ProductDiv>
           )
          })}
          {!search && products.map((product) => {
            return (
              <ProductDiv key={product.id}>
                <ProductImg src={product.photo}></ProductImg>
                <ProductInfo>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <h2>R$ {product.price.toLocaleString('pt-BR', format)}</h2>
                  <ButtonsDiv>
                    <a onClick={() => handleAddToFavorites(product.id)}>
                      <Star />
                    </a>
                    <Button onClick={() => handleAddToCart(product.id)}>Adicionar ao carrinho</Button>
                  </ButtonsDiv> 
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
