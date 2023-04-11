import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;

  input {
    width: 1rem;
    background: transparent;
    padding: 0 0.5rem;
    border: 0;
    text-align: center;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 0;
  }
`
