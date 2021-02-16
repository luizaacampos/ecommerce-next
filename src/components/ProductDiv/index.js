import styled from 'styled-components'

const ProductDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
`;

export default ProductDiv