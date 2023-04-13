import { Trash } from 'phosphor-react'
import AmericanoImg from '../../../../assets/coffees/americano.png'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  ProductContainerCheckout,
  PriceProductCheckout,
  ProductContentCheckout,
  RemoveProduct,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../../../contexts/ProductsContext'

interface ProductsProps {
  key: number
  id: number
  image: string
  categories: string[]
  name: string
  description: string
  price: number
  quantityInTheCart: number
}

export function ProductCheckout({
  id,
  image,
  name,
  price,
  quantityInTheCart,
}: ProductsProps) {
  const { productsInTheCart, setProductInTheCart } = useContext(ProductsContext)

  const [productPrice, setProductPrice] = useState(price)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const existingCartItemIndex = productsInTheCart.findIndex(
      (item) => item.productId === id,
    )

    if (existingCartItemIndex !== -1) {
      const updatedCart = [...productsInTheCart]
      updatedCart[existingCartItemIndex] = {
        ...updatedCart[existingCartItemIndex],
        productQuantity: quantity,
      }
      setProductInTheCart(updatedCart)
    } else {
      setProductInTheCart([
        ...productsInTheCart,
        {
          productId: id,
          productQuantity: quantity,
        },
      ])
    }
  }, [quantity])

  function setPrice(quantity: number) {
    setQuantity(quantity)
    setProductPrice(price * quantity)
  }

  function removeCartItem(productId: number) {
    // Filtra o array productsInTheCart para remover o objeto com o productId correspondente
    const updatedCart = productsInTheCart.filter(
      (item) => item.productId !== productId,
    )
    setProductInTheCart(updatedCart)
  }

  return (
    <ProductContainerCheckout>
      <img src={image} alt="" />
      <ProductContentCheckout>
        <h4>{name}</h4>
        <div>
          <QuantityInput
            setPrice={setPrice}
            quantityInTheCart={quantityInTheCart}
          />
          <RemoveProduct onClick={() => removeCartItem(id)}>
            <Trash size={16} /> Remover
          </RemoveProduct>
        </div>
      </ProductContentCheckout>
      <PriceProductCheckout>
        <h2>R$ {productPrice.toFixed(2)}</h2>
      </PriceProductCheckout>
    </ProductContainerCheckout>
  )
}
