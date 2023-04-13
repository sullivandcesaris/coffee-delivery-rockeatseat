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
import { ProductsTemplate } from './components/ProductsTemplate'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

export function Home() {
  const { products } = useContext(ProductsContext)

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
          {products?.map((product, index) => {
            return (
              <ProductsTemplate
                key={product.id}
                id={product.id}
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
