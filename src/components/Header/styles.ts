import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 99;
  background-color: ${(props) => props.theme['base-background']};
`
export const HeaderContent = styled.div`
  width: 82.5rem;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1320px) {
    width: 48rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 2rem;
  }
`

export const HeaderNavBar = styled.div`
  display: flex;
  gap: 1rem;
`

export const Location = styled.div`
  background: ${(props) => props.theme['purple-200']};
  padding: 0.5rem;
  padding-right: 0.7rem;
  border-radius: 8px;

  color: ${(props) => props.theme['purple-500']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  > svg {
    color: ${(props) => props.theme['purple-500']};
  }

  transition: background 0.2s, color 0.2s;

  :hover {
    background: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme['purple-200']};
    cursor: pointer;
  }
  :hover > svg {
    color: ${(props) => props.theme['purple-200']};
  }
`

export const Cart = styled.div`
  background: ${(props) => props.theme['yellow-200']};
  padding: 0.625rem 0.5rem;
  border-radius: 8px;

  color: ${(props) => props.theme['yellow-700']};

  display: relative;
  line-height: 0;

  transition: background 0.2s, color 0.2s;

  span {
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['base-white']};
    padding: 0.1rem;
    border-radius: 1rem;
    font-size: 0.7rem;
    line-height: 0;

    position: absolute;
    margin: -0.9rem 0 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :hover {
    background: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['yellow-200']};
    cursor: pointer;
  }
`
