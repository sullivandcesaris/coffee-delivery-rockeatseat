import React, { ReactNode, createContext, useEffect, useReducer } from 'react'
import ExpressoTradicional from '../assets/coffees/expresso.png'
import ExpressoAmericano from '../assets/coffees/americano.png'
import ExpressoCremoso from '../assets/coffees/expresso-cremoso.png'
import ExpressoGelado from '../assets/coffees/cafe-gelado.png'
import CafeComLeite from '../assets/coffees/cafe-com-leite.png'
import Latte from '../assets/coffees/latte.png'
import Capuccino from '../assets/coffees/capuccino.png'
import Macchiato from '../assets/coffees/macchiato.png'
import Mocaccino from '../assets/coffees/mochaccino.png'
import ChocolateQuente from '../assets/coffees/chocolate-quente.png'
import Cubano from '../assets/coffees/cubano.png'
import Havaiano from '../assets/coffees/havaiano.png'
import Arabe from '../assets/coffees/arabe.png'
import Irlandes from '../assets/coffees/irlandes.png'

export interface Product {
  id: number
  image: string
  categories: string[]
  name: string
  description: string
  price: number
}

const products = [
  {
    id: 1,
    image: ExpressoTradicional,
    categories: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    image: ExpressoAmericano,
    categories: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    image: ExpressoCremoso,
    categories: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    image: ExpressoGelado,
    categories: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    image: CafeComLeite,
    categories: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    image: Latte,
    categories: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    image: Capuccino,
    categories: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    image: Macchiato,
    categories: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    image: Mocaccino,
    categories: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    image: ChocolateQuente,
    categories: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    image: Cubano,
    categories: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    image: Havaiano,
    categories: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    image: Arabe,
    categories: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    image: Irlandes,
    categories: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export interface BrazilianStates {
  uf: string
  name: string
}

const brazilianStates = [
  { uf: 'AC', name: 'Acre' },
  { uf: 'AL', name: 'Alagoas' },
  { uf: 'AP', name: 'Amapá' },
  { uf: 'AM', name: 'Amazonas' },
  { uf: 'BA', name: 'Bahia' },
  { uf: 'CE', name: 'Ceará' },
  { uf: 'DF', name: 'Distrito Federal' },
  { uf: 'ES', name: 'Espírito Santo' },
  { uf: 'GO', name: 'Goiás' },
  { uf: 'MA', name: 'Maranhão' },
  { uf: 'MT', name: 'Mato Grosso' },
  { uf: 'MS', name: 'Mato Grosso do Sul' },
  { uf: 'MG', name: 'Minas Gerais' },
  { uf: 'PA', name: 'Pará' },
  { uf: 'PB', name: 'Paraíba' },
  { uf: 'PR', name: 'Paraná' },
  { uf: 'PE', name: 'Pernambuco' },
  { uf: 'PI', name: 'Piauí' },
  { uf: 'RJ', name: 'Rio de Janeiro' },
  { uf: 'RN', name: 'Rio Grande do Norte' },
  { uf: 'RS', name: 'Rio Grande do Sul' },
  { uf: 'RO', name: 'Rondônia' },
  { uf: 'RR', name: 'Roraima' },
  { uf: 'SC', name: 'Santa Catarina' },
  { uf: 'SP', name: 'São Paulo' },
  { uf: 'SE', name: 'Sergipe' },
  { uf: 'TO', name: 'Tocantins' },
]

type ProductInTheCart = {
  productId: number
  productQuantity: number
}

type ProductsInTheCart = ProductInTheCart[]

interface ProductsContextType {
  products: Product[] | undefined
  productsInTheCart: ProductsInTheCart
  handleAddProductInTheCart: (id: number, quantity: number) => void
  handleRemoveProductFromCart: (id: number) => void
  handleUpdateProductQuantity: (id: number, quantity: number) => void
  handleFinishedShopping: () => void
  brazilianStates: BrazilianStates[]
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductContextProviderProps) {
  const [productsInTheCart, dispatch] = useReducer(
    (state: ProductsInTheCart, action) => {
      if (action.type === 'addProductInTheCart') {
        const existingProduct = Array.isArray(state)
          ? state.find(
              (product) => product.productId === action.payload.productId,
            )
          : null
        if (existingProduct) {
          const newCart = state.map((product) => {
            if (product.productId === action.payload.productId) {
              return {
                ...product,
                productQuantity:
                  product.productQuantity + action.payload.productQuantity,
              }
            }
            return product
          })
          return newCart
        } else {
          // add a null check for the state array before spreading it
          const newState = Array.isArray(state)
            ? [...state, action.payload]
            : [action.payload]
          return newState
        }
      }

      if (action.type === 'updateProductQuantity') {
        const updatedCart = [...state]
        const itemIndex = updatedCart.findIndex(
          (item) => item.productId === action.payload.id,
        )

        if (itemIndex !== -1) {
          updatedCart[itemIndex].productQuantity = action.payload.quantity
        }

        return updatedCart
      }

      if (action.type === 'removeProductFromCart') {
        return state.filter((item) => item.productId !== action.payload)
      }

      if (action.type === 'clearCart') {
        return {}
      }

      return state
    },
    [],
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:products-in-the-cart-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return []
    },
  )

  function handleAddProductInTheCart(id, quantity) {
    dispatch({
      type: 'addProductInTheCart',
      payload: { productId: id, productQuantity: quantity },
    })
  }

  function handleRemoveProductFromCart(id) {
    dispatch({ type: 'removeProductFromCart', payload: id })
  }

  function handleUpdateProductQuantity(id, quantity) {
    dispatch({
      type: 'updateProductQuantity',
      payload: { id, quantity },
    })
  }

  function handleFinishedShopping() {
    dispatch({ type: 'clearCart' })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(productsInTheCart)

    localStorage.setItem(
      '@coffee-delivery:products-in-the-cart-1.0.0',
      stateJSON,
    )
  }, [productsInTheCart])

  return (
    <ProductsContext.Provider
      value={{
        products,
        brazilianStates,
        productsInTheCart,
        handleAddProductInTheCart,
        handleRemoveProductFromCart,
        handleUpdateProductQuantity,
        handleFinishedShopping,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
