import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
`;

export default Button