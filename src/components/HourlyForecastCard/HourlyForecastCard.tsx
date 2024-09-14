import './HourlyForecastCard.scss'

type ComponentProps = {
  imgSrc: string
  time: string
  temp: number
  textState: string
  isActive: boolean
}

export default function HourlyForecastCard({
  imgSrc,
  time,
  temp,
  textState,
  isActive
}: ComponentProps) {
  return (
    <div className={`hourly-forecast-card ${isActive && 'hourly-forecast-card--active'}`}>
      <span className={'hourly-forecast-card__time'}>{!isActive ? time : 'Teraz'}</span>
      <img
        src={imgSrc}
        className={'hourly-forecast-card__icon'}
        alt={`Hodinova predpoved pocasia ${time} ${textState}`}
      />
      <span className={'hourly-forecast-card__temp'}>{temp}°</span>
    </div>
  )
}
