import styled from 'styled-components'

const ProductsContainer = styled.div`
  width: 80%;
  padding-top: 45px;
  margin: auto 10%;
  background-color: ${({ theme }) => theme.colors.contrastText};
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default ProductsContainer