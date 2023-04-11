import { Plus, Minus } from 'phosphor-react'
import { useState } from 'react'
import { InputContainer } from './styles'

export function InputNumber() {
  const [value, setValue] = useState(1)

  function increment() {
    setValue(value + 1)
  }

  function decrement() {
    if (value !== 1) {
      setValue(value - 1)
    }
  }
  return (
    <InputContainer>
      <button onClick={decrement}>
        <Minus name="minus" size={16} />
      </button>
      <input type="number" value={value} min="1" />
      <button onClick={increment}>
        <Plus name="plus" size={16} />
      </button>
    </InputContainer>
  )
}
