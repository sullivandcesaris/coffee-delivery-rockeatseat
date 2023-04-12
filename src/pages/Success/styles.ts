import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: calc(82.5rem - 4rem);
  margin: 0 auto;
  padding: 5rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    flex: 1;
  }

  > div:last-child {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1320px) {
    width: calc(48rem - 4rem);
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 4rem);
    align-items: center;
  }
`

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-700']};
  }

  > div:nth-of-type(1) {
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    h2 {
      line-height: 2rem;
    }
  }
`

export const SuccessData = styled.div`
  background: ${(props) => props.theme['base-background']};
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    gap: 1rem;
  }

  div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    font-weight: 700;
  }

  ::before {
    content: '';
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    z-index: -1;
    border-radius: 6px 36px 6px 36px;
  }
`
export const MapIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme['purple-500']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  svg {
    color: ${(props) => props.theme['base-background']};
  }
`
export const TimerIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme['yellow-500']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  svg {
    color: ${(props) => props.theme['base-background']};
  }
`
export const DolarIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme['yellow-700']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  svg {
    color: ${(props) => props.theme['base-background']};
  }
`
