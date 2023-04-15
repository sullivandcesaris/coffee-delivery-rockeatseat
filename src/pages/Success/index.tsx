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
import { useLocation } from 'react-router-dom'
import SuccessImage from '../../assets/success.svg'

export function Success() {
  const location = useLocation()
  const formData = location.state?.formData

  const getPaymentMethodName = (value) => {
    switch (value) {
      case 'credit-card':
        return 'Cartão de crédito'
      case 'debit-card':
        return 'Cartão de débito'
      case 'money':
        return 'Dinheiro'
      default:
        return ''
    }
  }

  const paymentMethodName = getPaymentMethodName(formData.paymentMethod)

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
                  Entrega em Rua <span>{formData.street}</span>
                </p>
                <p>
                  {formData.district} - {formData.city}, {formData.state}
                </p>
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
                  <span>{paymentMethodName}</span>
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
