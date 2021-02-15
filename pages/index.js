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
import { LeftTopArrowCircle } from 'styled-icons/boxicons-solid'

// const [search, setSearch] = useState(null)

// function handleSearch(event) {
//   let userWord = event.target.value
//   setSearch(userWord)
// }

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
  color: ${({ theme }) => theme.colors.secondary};
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;
`;

export default function Home() {

  const [search, setSearch] = useState(null)
  let searching = ''

  function getSearch(event) {
    searching = event.target.value
  }

  function handleSearch(event) {
    event.preventDefault()
    setSearch(searching)
    searching = ''
  }

  return (
    <>
    <Header></Header>
    <SearchDiv>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={getSearch} placeholder="Pesquise por um produto"></input>
        <button type="submit"><Search /></button>
      </form>
    </SearchDiv>
    <Container>
      <Aside></Aside>
      <ProductsContainer>
      {console.log(products[0].name.includes(search))}
          {search && products.filter(product => product.name.includes(search)).map(filteredProduct => {
            return (
            <ProductDiv>
                <ProductImg src={filteredProduct.photo}></ProductImg>
                <ProductInfo>
                  <h1>{filteredProduct.name}</h1>
                  <p>{filteredProduct.description}</p>
                  <h2>R$ {filteredProduct.price}</h2>
                  <Button>Adicionar ao carrinho</Button>
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
                  <h2>R$ {product.price}</h2>
                  <ButtonsDiv>
                    <a>
                      <Star />
                    </a>
                    <Button>Adicionar ao carrinho</Button>
                  </ButtonsDiv> 
                </ProductInfo>
              </ProductDiv>
            )
          })}
      </ProductsContainer>
    </Container>
    <Footer>Desenvolvido por Luiza Campos</Footer>
    </>
  )
}
