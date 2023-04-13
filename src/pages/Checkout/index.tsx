import { Header } from '../../components/Header'
import { ProductCheckout } from './components/ProductCheckout'
import { useForm } from 'react-hook-form'
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Money,
} from 'phosphor-react'
import {
  Address,
  AddressFormCheckout,
  ButtonMethod,
  CheckoutContainer,
  PaymentCheckout,
  PaymentsMethods,
  ProductsSide,
  ProductsSideFooter,
  TotalCheckout,
  W10Field,
  W1Field,
  W4Field,
  W5Field,
  W6Field,
} from './styles'
import { useContext } from 'react'
import { Product, ProductsContext } from '../../contexts/ProductsContext'

export function Checkout() {
  const { productsInTheCart, products } = useContext(ProductsContext)
  const { register } = useForm()

  const productsWithQuantity = products?.map((product) => {
    const productInCart = productsInTheCart.find(
      (item) => item.productId === product.id,
    )
    if (productInCart) {
      return { ...product, quantity: productInCart.productQuantity }
    }
    return null
  })

  let productsWithQuantityFiltered: any

  if (productsWithQuantity) {
    productsWithQuantityFiltered = productsWithQuantity?.filter(Boolean)
  }

  interface ProductsProps extends Product {
    quantity: number
  }

  function calculateTotalPrice() {
    let totalPrice = 0
    productsWithQuantityFiltered.forEach((item: ProductsProps) => {
      totalPrice += item.price * item.quantity
    })
    return totalPrice
  }

  return (
    <>
      <Header />
      <CheckoutContainer>
        <div>
          <h2>Complete seu pedido</h2>
          <Address>
            <div>
              <MapPin size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <AddressFormCheckout>
              <W4Field>
                <input
                  type="number"
                  id=""
                  placeholder="CEP"
                  {...register('postal-code')}
                />
              </W4Field>
              <W10Field>
                <input
                  type="text"
                  id=""
                  placeholder="Endereço"
                  {...register('street')}
                />
              </W10Field>
              <W4Field>
                <input
                  type="number"
                  id=""
                  placeholder="Número"
                  {...register('number')}
                />
              </W4Field>
              <W6Field>
                <input
                  type="text"
                  id=""
                  placeholder="Complemento"
                  {...register('addition')}
                />
              </W6Field>
              <W4Field>
                <input
                  type="text"
                  id=""
                  placeholder="Bairro"
                  {...register('district')}
                />
              </W4Field>
              <W5Field>
                <input
                  type="text"
                  id=""
                  placeholder="Cidade"
                  {...register('city')}
                />
              </W5Field>
              <W1Field>
                <input
                  type="text"
                  id=""
                  placeholder="UF"
                  maxLength={2}
                  {...register('state')}
                />
              </W1Field>
            </AddressFormCheckout>
          </Address>
          <PaymentCheckout>
            <div>
              <CurrencyDollarSimple size={22} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <PaymentsMethods>
              <input
                type="radio"
                id="creditCard"
                name="payment-method"
                value="credit-card"
              />
              <ButtonMethod htmlFor="creditCard">
                <CreditCard size={22} /> cartão de crédito
              </ButtonMethod>
              <input
                type="radio"
                id="debitCard"
                name="payment-method"
                value="debit-card"
              />
              <ButtonMethod htmlFor="debitCard">
                <Bank size={22} /> cartão de débito
              </ButtonMethod>
              <input
                type="radio"
                id="money"
                name="payment-method"
                value="money"
              />
              <ButtonMethod htmlFor="money">
                <Money size={22} />
                dinheiro
              </ButtonMethod>
            </PaymentsMethods>
          </PaymentCheckout>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <ProductsSide>
            {productsWithQuantityFiltered.length > 0 ? (
              productsWithQuantityFiltered.map((product: ProductsProps) => {
                return (
                  <ProductCheckout
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    categories={product.categories}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    quantityInTheCart={product.quantity}
                  />
                )
              })
            ) : (
              <p>Não há itens no carrinho.</p>
            )}
            <ProductsSideFooter>
              <div>
                <span>Total de itens</span>
                <span>R$ {calculateTotalPrice().toFixed(2)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <TotalCheckout>
                <span>Total</span>
                <span>R$ {(calculateTotalPrice() + 3.5).toFixed(2)}</span>
              </TotalCheckout>
              <a href="/success">
                <button>confirmar pedido</button>
              </a>
            </ProductsSideFooter>
          </ProductsSide>
        </div>
      </CheckoutContainer>
    </>
  )
}
