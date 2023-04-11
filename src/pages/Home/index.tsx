import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imgInicialHome from '../../assets/banner-inicial-home.svg'
import { Header } from '../../components/Header'
import {
  BackgroundImage,
  BannerContainer,
  GridProducts,
  HomeContainer,
  IconAndTextContainer,
  IconCoffee,
  IconPackage,
  IconShoppingCart,
  IconTimer,
  TextContainer,
  TextItems,
} from './styles'
import { Products } from './components/Products'
import ExpressoTradicional from '../../assets/coffees/expresso.png'
import ExpressoAmericano from '../../assets/coffees/americano.png'
import ExpressoCremoso from '../../assets/coffees/expresso-cremoso.png'
import ExpressoGelado from '../../assets/coffees/cafe-gelado.png'
import CafeComLeite from '../../assets/coffees/cafe-com-leite.png'
import Latte from '../../assets/coffees/latte.png'
import Capuccino from '../../assets/coffees/capuccino.png'
import Macchiato from '../../assets/coffees/macchiato.png'
import Mocaccino from '../../assets/coffees/mochaccino.png'
import ChocolateQuente from '../../assets/coffees/chocolate-quente.png'
import Cubano from '../../assets/coffees/cubano.png'
import Havaiano from '../../assets/coffees/havaiano.png'
import Arabe from '../../assets/coffees/arabe.png'
import Irlandes from '../../assets/coffees/irlandes.png'

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
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    image: Capuccino,
    categories: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    image: Macchiato,
    categories: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
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
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
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

export function Home() {
  return (
    <>
      <Header />
      <BackgroundImage>
        <BannerContainer>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <TextItems>
              <div>
                <IconAndTextContainer>
                  <IconShoppingCart>
                    <ShoppingCart size={16} weight="fill" />
                  </IconShoppingCart>
                  <span>Compra simples e segura</span>
                </IconAndTextContainer>
                <IconAndTextContainer>
                  <IconTimer>
                    <Timer size={16} weight="fill" />
                  </IconTimer>
                  <span>Entrega rápida e rastreada</span>
                </IconAndTextContainer>
              </div>
              <div>
                <IconAndTextContainer>
                  <IconPackage>
                    <Package size={16} weight="fill" />
                  </IconPackage>
                  <span>Embalagem mantém o café intacto</span>
                </IconAndTextContainer>
                <IconAndTextContainer>
                  <IconCoffee>
                    <Coffee size={16} weight="fill" />
                  </IconCoffee>
                  <span>O café chega fresquinho até você</span>
                </IconAndTextContainer>
              </div>
            </TextItems>
          </TextContainer>
          <img src={imgInicialHome} alt="" />
        </BannerContainer>
      </BackgroundImage>
      <HomeContainer>
        <h1>Nossos Cafés</h1>
        <GridProducts>
          {products.map((product, index) => {
            return (
              <Products
                key={index}
                image={product.image}
                categories={product.categories}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            )
          })}
        </GridProducts>
      </HomeContainer>
    </>
  )
}
