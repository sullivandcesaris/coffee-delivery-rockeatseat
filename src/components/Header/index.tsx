import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import {
  Cart,
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  Location,
} from './styles'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { productsInTheCart } = useContext(ProductsContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </Link>
        <HeaderNavBar>
          <Location>
            <MapPin size={22} weight="fill" />
            <span> Porto Alegre, RS</span>
          </Location>
          <Link to="/checkout">
            <Cart>
              {productsInTheCart.length > 0 ? (
                <span>{productsInTheCart.length}</span>
              ) : (
                ''
              )}

              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </Link>
        </HeaderNavBar>
      </HeaderContent>
    </HeaderContainer>
  )
}
