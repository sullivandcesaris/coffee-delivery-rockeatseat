import { Header } from '../../components/Header'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DolarIcon,
  MapIcon,
  SuccessContainer,
  SuccessData,
  SuccessMessage,
  TimerIcon,
} from './styles'
import SuccessImage from '../../assets/success.svg'

export function Success() {
  return (
    <>
      <Header />
      <SuccessContainer>
        <SuccessMessage>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <SuccessData>
            <div>
              <MapIcon>
                <MapPin size={20} weight="fill" />
              </MapIcon>
              <div>
                <p>
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div>
              <TimerIcon>
                <Timer size={20} weight="fill" />
              </TimerIcon>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <span>20 min - 30 min</span>
                </p>
              </div>
            </div>
            <div>
              <DolarIcon>
                <CurrencyDollar size={20} weight="fill" />
              </DolarIcon>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <span>Cartão de Crédito</span>
                </p>
              </div>
            </div>
          </SuccessData>
        </SuccessMessage>
        <div>
          <img src={SuccessImage} alt="" />
        </div>
      </SuccessContainer>
    </>
  )
}
