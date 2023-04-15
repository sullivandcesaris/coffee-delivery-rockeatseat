import backgroundHome from '../../assets/background-home.svg'
import styled from 'styled-components'

export const BackgroundImage = styled.div`
  background-image: url(${backgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
`

export const BannerContainer = styled.div`
  width: 82.5rem;
  margin: auto;
  padding: 20.75rem 0 15.75rem 0;

  display: flex;
  gap: 3.5rem;

  @media (max-width: 1320px) {
    width: 48rem;
    align-items: center;
    flex-direction: column-reverse;
  }
  @media (max-width: 768px) {
    width: calc(100% - 1rem);
    gap: 2rem;
    padding: 2.5rem 1rem;

    img {
      width: 80%;
    }
  }
`
export const HomeContainer = styled.div`
  width: 82.5rem;
  margin: auto;
  padding: 5.75rem 0;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  @media (max-width: 1320px) {
    width: 48rem;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: calc(100% - 1rem);
    gap: 3.5rem;
    padding: 2.5rem 1rem;

    img {
      width: 80%;
    }
  }
`

export const TextContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }

  p {
    margin: 1rem 0 4.125rem 0;
    font-size: 1.25rem;
  }

  @media (max-width: 1320px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      text-align: center;
    }

    p {
      text-align: center;
      margin: 2rem 0 4.125rem 0;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const TextItems = styled.div`
  display: flex;
  gap: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  @media (max-width: 768px) {
    gap: 1.25rem;
    flex-direction: column;
  }
`

export const IconAndTextContainer = styled.div`
  line-height: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconsHome = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  border-radius: 99rem;
  color: ${(props) => props.theme['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconShoppingCart = styled(IconsHome)`
  background-color: ${(props) => props.theme['yellow-700']};
`

export const IconTimer = styled(IconsHome)`
  background-color: ${(props) => props.theme['yellow-500']};
`

export const IconPackage = styled(IconsHome)`
  background-color: ${(props) => props.theme['base-title']};
`

export const IconCoffee = styled(IconsHome)`
  background-color: ${(props) => props.theme['purple-500']};
`
export const GridProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1320px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 867px) {
    grid-template-columns: 1fr;
  }
`
