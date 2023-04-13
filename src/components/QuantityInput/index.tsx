import { Plus, Minus } from 'phosphor-react'
import { InputContainer } from './styles'
import { useState, useEffect } from 'react'

interface Props {
  setPrice: (quantity: number) => void
  quantityInTheCart?: number
}

export function QuantityInput({ setPrice, quantityInTheCart }: Props) {
  // const { decrementQuantity, quantity, incrementQuantity } =
  //   useContext(ProductsContext)

  const [quantity, setQuantity] = useState(quantityInTheCart || 1)

  useEffect(() => {
    return setPrice(quantity)
  }, [quantity, setPrice])

  function handleIncrementQuantity() {
    setQuantity(quantity + 1)
  }

  function handleDecrementQuantity() {
    if (quantity !== 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <InputContainer>
      <button
        onClick={() => {
          handleDecrementQuantity()
        }}
      >
        <Minus name="minus" size={16} />
      </button>
      <input type="number" value={quantity} min="1" />
      <button
        onClick={() => {
          handleIncrementQuantity()
        }}
      >
        <Plus name="plus" size={16} />
      </button>
    </InputContainer>
  )
}
