import React, { ReactElement } from 'react'
import './WeatherDetailCard.scss'

export function WeatherDetailCard({
  cardIcon,
  cardText,
  cardData
}: {
  cardIcon: ReactElement
  cardText: string
  cardData: string
}) {
  return (
    <div className={'weather-detail-card'}>
      <div className={'weather-detail-card__icon-with-text'}>
        <div className={'weather-detail-card__icon-with-text__icon'}>{cardIcon}</div>
        <span>{cardText}</span>
      </div>
      <span>{cardData}</span>
    </div>
  )
}
