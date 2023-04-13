import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: calc(82.5rem - 4rem);
  padding: 10rem 2rem 2rem 2rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 0.7fr;

  gap: 2rem;

  h2 {
    font-size: 1.2rem;
    font-family: 'Baloo 2', cursive;
  }

  @media (max-width: 1320px) {
    width: calc(48rem - 4rem);
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) {
    display: block;
    width: calc(100% - 4rem);

    > div {
      margin-top: 2rem;
    }
  }
`

export const Address = styled.div`
  padding: 2.5rem;
  margin-top: 1rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  > div {
    display: flex;
    gap: 0.5rem;
  }

  div > svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  div > p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }

  div > span {
    font-size: 0.8rem;
  }
`

export const ProductsSide = styled.div`
  padding: 2.5rem;
  margin-top: 1rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const AddressFormCheckout = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.75rem;
    margin: 0.5rem 0.375rem;
    height: 2.625rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    font-size: 0.875rem;
  }
`

export const W1Field = styled.div`
  width: calc(10% - 0.75rem);
  text-align: center;
  margin: 0 0.375rem;

  @media (max-width: 768px) {
    display: contents;
  }
`

export const W4Field = styled.div`
  width: calc(40% - 0.75rem);
  margin: 0 0.375rem;

  @media (max-width: 768px) {
    display: contents;
  }
`

export const W5Field = styled.div`
  width: calc(50% - 0.75rem);
  margin: 0 0.375rem;

  @media (max-width: 768px) {
    display: contents;
  }
`

export const W6Field = styled.div`
  width: calc(60% - 0.75rem);
  margin: 0 0.375rem;

  @media (max-width: 768px) {
    display: contents;
  }
`

export const W10Field = styled.div`
  width: 100%;
  margin: 0 0.375rem;

  @media (max-width: 768px) {
    display: contents;
  }
`

export const PaymentCheckout = styled.div`
  padding: 2.5rem;
  margin-top: 1rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  > div {
    display: flex;
    gap: 0.5rem;
  }

  div > svg {
    color: ${(props) => props.theme['purple-500']};
  }

  div > p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }

  div > span {
    font-size: 0.8rem;
  }
`
export const PaymentsMethods = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-200']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`
export const ButtonMethod = styled.label`
  flex: 1;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  padding: 1rem;
  text-transform: uppercase;
  line-height: 1rem;

  font-size: 0.875rem;

  border: 0;
  border-radius: 8px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
export const ProductsSideFooter = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    display: contents;
    color: ${(props) => props.theme['base-white']};
    text-transform: uppercase;
  }

  button {
    margin-top: 1.25rem;
    padding: 0.875rem;

    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['base-white']};

    border: 0;
    border-radius: 6px;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
    text-transform: uppercase;

    cursor: pointer;
  }

  button:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const TotalCheckout = styled.div`
  span {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
