import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { valores, reducer } from './cart'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Container from '../src/components/Container'

const FlexContainer = styled(Container)`
    height: 90vh;
    justify-content: center;
    align-items: center;
`;

const ProductsContainer = styled.div`
  width: 50vw;
  padding: 10px;
  background-color: var(--contrastText);
  border-radius: 10px;
  h1 {
      text-align: center;
  }
`;

const InputsDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  input {
      height: 25px;
      margin-left: 5px;
      margin-right: 20px;
  }
`;

const Img = styled.img`
    width: 30%;
    height: auto;
`;

const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const CancelButton = styled(Button)`
    background-color: var(--wrong);
    margin: 10px;
`;

const ConfirmButton = styled(Button)`
    background-color: var(--success);
    margin: 10px;
`;

export default function Pagamento() {

   

    return (
        <>
        <Header />
        <FlexContainer>
            <ProductsContainer>
                <h1>Pagamento</h1>
                <h2>TOTAL: R$ {valores.reduce(reducer, 0).toFixed(2)}</h2>
                {/* <form>
                    <p>Número do cartão:</p>
                    <input placeholder="XXXX XXXX XXXX XXXX" type="text" onChange={getNumberCard}></input>
                    <Img />
                    <InputsDiv>
                        <p>data de expiração:</p>
                        <input type="text"></input>
                        <p>CVV:</p>
                        <input type="text"></input>
                    </InputsDiv>
                    <ButtonsDiv>
                        <CancelButton><Link href="/">Cancelar e voltar</Link></CancelButton>
                        <ConfirmButton onClick={confirm}>Pagar</ConfirmButton>
                    </ButtonsDiv>
                </form> */}
            </ProductsContainer>
        </FlexContainer>
        <Footer />
        </>
    )
}