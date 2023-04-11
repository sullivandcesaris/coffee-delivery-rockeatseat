import { Trash } from 'phosphor-react'
import AmericanoImg from '../../../../assets/coffees/americano.png'
import { InputNumber } from '../../../../components/InputNumber'
import {
  ProductContainerCheckout,
  PriceProductCheckout,
  ProductContentCheckout,
  RemoveProduct,
} from './styles'

export function ProductCheckout() {
  return (
    <ProductContainerCheckout>
      <img src={AmericanoImg} alt="" />
      <ProductContentCheckout>
        <h4>Expresso Americano</h4>
        <div>
          <InputNumber />
          <RemoveProduct>
            <Trash size={16} /> Remover
          </RemoveProduct>
        </div>
      </ProductContentCheckout>
      <PriceProductCheckout>
        <h2>R$ 9,90</h2>
      </PriceProductCheckout>
    </ProductContainerCheckout>
  )
}
