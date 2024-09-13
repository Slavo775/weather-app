import './HourlyForecastCard.scss'

export default function HourlyForecastCard({imgSrc, time, temp, textState, isActive, key}: {imgSrc: string, time: string, temp: number, textState: string, isActive: boolean, key: string}) {
    return (
        <div className={`hourly-forecast-card ${isActive && 'hourly-forecast-card--active'}`} key={key}>
            <span className={'hourly-forecast-card__time'}>{ !isActive ? time : 'Teraz'}</span>
            <img src={imgSrc} className={'hourly-forecast-card__icon'} alt={`Hodinova predpoved pocasia ${time} ${textState}`}/>
            <span className={'hourly-forecast-card__temp'}>{temp}°</span>
        </div>
    )
}