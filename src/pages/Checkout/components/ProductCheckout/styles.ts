import styled from 'styled-components'

export const ProductContainerCheckout = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
  }

  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const ProductContentCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const RemoveProduct = styled.button`
  background: ${(props) => props.theme['base-button']};
  padding: 0.4rem;
  border: 0;
  border-radius: 6px;
  line-height: 1rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const PriceProductCheckout = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`
