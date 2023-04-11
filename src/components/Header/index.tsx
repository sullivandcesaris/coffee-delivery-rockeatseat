import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { Cart, HeaderContainer, HeaderNavBar, Location } from './styles'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <a href="/">
          <img src={logoCoffeeDelivery} alt="" />
        </a>
        <HeaderNavBar>
          <Location>
            <MapPin size={22} weight="fill" />
            <span> Porto Alegre, RS</span>
          </Location>
          <a href="/checkout">
            <Cart>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </a>
        </HeaderNavBar>
      </HeaderContainer>
    </div>
  )
}
