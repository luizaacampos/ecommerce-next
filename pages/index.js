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
  align-items: center;
  padding-top: 10px;
  input {
    height: 30px;
    padding-right: 15px
  }
  button {
    height: 30px;
    width: 30px;
  }
`;

const Search = styled(SearchAlt)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.dark};
`;

const ButtonsDiv = styled.div`
  display: flex;
`;

const Star = styled(StarFill)`
  color: ${({ theme }) => theme.colors.yellow};
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;
`;

export default function Home() {

  const [search, setSearch] = useState(null)
  const [searching, setSearching] = useState('')

  function getSearch(event) {
    setSearching(event.target.value)
  }

  function handleSearch(event) {
    event.preventDefault()
    setSearch(searching)
  }

  function handleAddToFavorites(productId) {
    if (!favorites.includes(productId)) {
      favorites.push(productId)
  
      // this.style.color = `${({ theme }) => theme.colors.yellow}`
      alert('Produto adicionado aos favoritos')
      console.log(favorites)
      console.log(this)
    } else {
      alert('Produto já é um favorito!')
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
                    <a onClick={handleAddToFavorites.bind(this, product.id)}>
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
