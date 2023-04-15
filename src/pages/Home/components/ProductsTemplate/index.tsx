import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../../../contexts/ProductsContext'

import {
  ProductCategory,
  ProductCategoryContainer,
  ProductContainer,
  ProductsFooter,
  ProductsInsertInCart,
  ProductsPrice,
} from './styles'

interface ProductsProps {
  id: number
  image: string
  categories: string[]
  name: string
  description: string
  price: number
}

export function ProductsTemplate({
  id,
  image,
  categories,
  name,
  description,
  price,
}: ProductsProps) {
  const [productPrice, setProductPrice] = useState(price)

  const [quantity, setQuantity] = useState(1)

  const { handleAddProductInTheCart } = useContext(ProductsContext)

  function setPrice(quantity: number) {
    setQuantity(quantity)
    setProductPrice(price * quantity)
  }

  return (
    <ProductContainer>
      <img src={image} alt="" />
      <ProductCategoryContainer>
        {categories.map((category, index) => {
          return <ProductCategory key={index}>{category}</ProductCategory>
        })}
      </ProductCategoryContainer>
      <h2>{name}</h2>
      <p>{description}</p>
      <ProductsFooter>
        <span>R$</span>
        <ProductsPrice>{productPrice.toFixed(2)}</ProductsPrice>
        <QuantityInput setPrice={setPrice} />
        <ProductsInsertInCart
          onClick={() => handleAddProductInTheCart(id, quantity)}
        >
          <ShoppingCart weight="fill" />
        </ProductsInsertInCart>
      </ProductsFooter>
    </ProductContainer>
  )
}
