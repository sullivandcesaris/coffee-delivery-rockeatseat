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

export function Checkout() {
  const { register, handleSubmit } = useForm()

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
              <ButtonMethod for="creditCard">
                <CreditCard size={22} /> cartão de crédito
              </ButtonMethod>
              <input
                type="radio"
                id="debitCard"
                name="payment-method"
                value="debit-card"
              />
              <ButtonMethod for="debitCard">
                <Bank size={22} /> cartão de débito
              </ButtonMethod>
              <input
                type="radio"
                id="money"
                name="payment-method"
                value="money"
              />
              <ButtonMethod for="money">
                <Money size={22} />
                dinheiro
              </ButtonMethod>
            </PaymentsMethods>
          </PaymentCheckout>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <ProductsSide>
            <ProductCheckout />
            <ProductCheckout />
            <ProductCheckout />
            <ProductsSideFooter>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <TotalCheckout>
                <span>Total</span>
                <span>R$ 33,20</span>
              </TotalCheckout>
              <button>confirmar pedido</button>
            </ProductsSideFooter>
          </ProductsSide>
        </div>
      </CheckoutContainer>
    </>
  )
}
