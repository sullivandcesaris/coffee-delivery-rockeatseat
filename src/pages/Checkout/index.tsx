import { useContext } from 'react'
import { Product, ProductsContext } from '../../contexts/ProductsContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Money,
} from 'phosphor-react'
import { Header } from '../../components/Header'
import { ProductCheckout } from './components/ProductCheckout'
import {
  Address,
  AddressFormCheckout,
  ButtonMethod,
  CheckoutContainer,
  ErrorMessage,
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

export function Checkout() {
  const {
    brazilianStates,
    products,
    productsInTheCart,
    handleFinishedShopping,
  } = useContext(ProductsContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  function handleCreateNewPurchase(data: any) {
    handleFinishedShopping()
    navigate('/success', { state: { formData: data } })
  }

  const productsWithQuantity = products?.map((product) => {
    const productInCart = Array.isArray(productsInTheCart)
      ? productsInTheCart.find((item) => item.productId === product.id)
      : null
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

  const isSubmitDisabled = !productsWithQuantityFiltered.length > 0

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
            <AddressFormCheckout
              id="purchaseData"
              onSubmit={handleSubmit(handleCreateNewPurchase)}
            >
              <W4Field>
                <input
                  type="text"
                  id=""
                  placeholder="CEP (xxxxx-xxx)"
                  {...register('postalCode', {
                    required: 'CEP é obrigatório',
                    pattern: {
                      value: /^[0-9]{5}-[0-9]{3}$/,
                      message: 'CEP inválido',
                    },
                  })}
                />
                {errors.postalCode && (
                  <ErrorMessage>{errors.postalCode.message}</ErrorMessage>
                )}
              </W4Field>
              <W10Field>
                <input
                  type="text"
                  id=""
                  placeholder="Endereço"
                  {...register('street', {
                    required: 'Endereço é obrigatório',
                  })}
                />
                {errors.street && (
                  <ErrorMessage>{errors.street.message}</ErrorMessage>
                )}
              </W10Field>
              <W4Field>
                <input
                  type="number"
                  id=""
                  placeholder="Número"
                  {...register('number', {
                    required: 'Numero é obrigatório',
                    pattern: {
                      value: /^\d+$/,
                      message: 'Numero inválido',
                    },
                  })}
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
              <W10Field>
                {errors.number && (
                  <ErrorMessage>{errors.number.message}</ErrorMessage>
                )}
              </W10Field>
              <W4Field>
                <input
                  type="text"
                  id=""
                  placeholder="Bairro"
                  {...register('district', {
                    required: 'Bairro é obrigatório',
                  })}
                />
              </W4Field>
              <W5Field>
                <input
                  type="text"
                  id=""
                  placeholder="Cidade"
                  {...register('city', {
                    required: 'Cidade é obrigatório',
                  })}
                />
              </W5Field>
              <W1Field>
                <select
                  {...register('state', { required: 'UF é obrigatório' })}
                >
                  <option value="">UF</option>
                  {brazilianStates.map((state) => (
                    <option key={state.uf} value={state.uf}>
                      {state.uf}
                    </option>
                  ))}
                </select>
              </W1Field>
              <W10Field>
                {errors.district && (
                  <ErrorMessage>{errors.district.message}</ErrorMessage>
                )}
                {errors.city && (
                  <ErrorMessage>{errors.city.message}</ErrorMessage>
                )}
                {errors.state && (
                  <ErrorMessage>{errors.state.message}</ErrorMessage>
                )}
              </W10Field>
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
                value="credit-card"
                {...register('paymentMethod', {
                  required: 'Selecione uma opção',
                })}
              />
              <ButtonMethod htmlFor="creditCard">
                <CreditCard size={22} /> cartão de crédito
              </ButtonMethod>
              <input
                type="radio"
                id="debitCard"
                value="debit-card"
                {...register('paymentMethod', {
                  required: 'Selecione uma opção',
                })}
              />
              <ButtonMethod htmlFor="debitCard">
                <Bank size={22} /> cartão de débito
              </ButtonMethod>
              <input
                type="radio"
                id="money"
                value="money"
                {...register('paymentMethod', {
                  required: 'Selecione uma opção',
                })}
              />
              <ButtonMethod htmlFor="money">
                <Money size={22} />
                dinheiro
              </ButtonMethod>
              {errors.paymentMethod && (
                <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>
              )}
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
              <button
                type="submit"
                form="purchaseData"
                disabled={isSubmitDisabled}
              >
                confirmar pedido
              </button>
            </ProductsSideFooter>
          </ProductsSide>
        </div>
      </CheckoutContainer>
    </>
  )
}
