import { ShoppingCart } from 'phosphor-react'
import {
  ProductCategory,
  ProductCategoryContainer,
  ProductContainer,
  ProductsFooter,
  ProductsInsertInCart,
  ProductsPrice,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../../../contexts/ProductsContext'

interface ProductsProps {
  key: number
  id: number
  image: string
  categories: string[]
  name: string
  description: string
  price: number
}

export function ProductsTemplate({
  key,
  id,
  image,
  categories,
  name,
  description,
  price,
}: ProductsProps) {
  const [productPrice, setProductPrice] = useState(price)
  const [quantity, setQuantity] = useState(1)

  const { productsInTheCart, setProductInTheCart } = useContext(ProductsContext)

  function setPrice(quantity: number) {
    setQuantity(quantity)
    setProductPrice(price * quantity)
  }

  function handleAddProductInTheCart() {
    setProductInTheCart([
      ...productsInTheCart,
      { productId: id, productQuantity: quantity },
    ])
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
        <ProductsInsertInCart onClick={handleAddProductInTheCart}>
          <ShoppingCart weight="fill" />
        </ProductsInsertInCart>
      </ProductsFooter>
    </ProductContainer>
  )
}
