import styled from 'styled-components'

export const ProductContainer = styled.div`
  padding: 1.25rem 1.225rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
  }

  img {
    margin-top: -2.5rem;
  }

  p {
    font-size: 0.825rem;
    text-align: center;
    margin: 0.5rem 0 2.0625rem 0;
  }

  @media (max-width: 768px) {
    img {
      width: initial;
    }
  }
`

export const ProductCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`

export const ProductCategory = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.4rem;
  margin: 0.725rem 0;

  background: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme['yellow-700']};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
  border-radius: 6.25rem;

  flex: none;
  order: 0;
  flex-grow: 0;
`
export const ProductsFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 0.825rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProductsPrice = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem !important;
  color: ${(props) => props.theme['base-text']};
  margin: 0 1.225rem 0 0.325rem;
`
export const ProductsInsertInCart = styled.button`
  display: inline-flex;
  background: ${(props) => props.theme['purple-700']};
  padding: 0.625rem 0.5rem;
  border: 0;
  border-radius: 8px;
  outline: 0;

  color: ${(props) => props.theme['base-background']};

  transition: background 0.2s, color 0.2s;

  :hover {
    background: ${(props) => props.theme['purple-200']};
    color: ${(props) => props.theme['purple-700']};
    cursor: pointer;
  }
`
