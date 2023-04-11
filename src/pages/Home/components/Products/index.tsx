import { ShoppingCart } from 'phosphor-react'
import {
  ProductCategory,
  ProductCategoryContainer,
  ProductContainer,
  ProductsFooter,
  ProductsInsertInCart,
  ProductsPrice,
} from './styles'
import { InputNumber } from '../../../../components/InputNumber'

interface ProductsProps {
  image: string
  categories: string[]
  name: string
  description: string
  price: number
}

export function Products({
  image,
  categories,
  name,
  description,
  price,
}: ProductsProps) {
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
        <ProductsPrice>{price.toFixed(2)}</ProductsPrice>
        <InputNumber />
        <ProductsInsertInCart>
          <ShoppingCart weight="fill" />
        </ProductsInsertInCart>
      </ProductsFooter>
    </ProductContainer>
  )
}
