import { WeatherDetailCard } from '../WeatherDetailCard/WeatherDetailCard'
import UmbrellaIcon from '../../../svg/UmbrellaIcon'
import WindIcon from '../../../svg/WindIcon'
import DropIcon from '../../../svg/DropIcon'
import './WeatherDetailWrapper.scss'

export function WeatherDetailWrapper({
  precip,
  wind,
  humidity
}: {
  precip: number
  wind: number
  humidity: number
}) {
  return (
    <div className={'weather-detail-wrapper'}>
      <WeatherDetailCard
        cardIcon={UmbrellaIcon()}
        cardText={'Úhrn zrážok'}
        cardData={`${precip}mm`}
      />
      <WeatherDetailCard
        cardIcon={WindIcon()}
        cardText={'Rýchlosť vetra'}
        cardData={`${wind}km/h`}
      />
      <WeatherDetailCard
        cardIcon={DropIcon()}
        cardText={'Vlhkosť vzduchu'}
        cardData={`${humidity}km/h`}
      />
    </div>
  )
}
