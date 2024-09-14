import { ForecastWeatherHourResponse } from '../../types/weatherDataResponse'
import HourlyForecastCard from '../HourlyForecastCard/HourlyForecastCard'
import { getNearestDate, getTimeFromDateTime } from '../../utils/dateTime'
import { useMemo } from 'react'
import { CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './HourlyForecast.scss'

export default function HourlyForecast({ hours }: { hours: ForecastWeatherHourResponse[] }) {
  const isActive = (date: Date) => {
    return date.getTime() === nearestTextHourDate.getTime()
  }

  //create new local computed for create Date object for all hours (better optimization Date object created once)
  const hoursLocal = useMemo<(ForecastWeatherHourResponse & { date: Date })[]>(
    () => hours.map((hour) => ({ ...hour, date: new Date(hour.time) })),
    [hours]
  )
  const allDates = useMemo(() => hoursLocal.map((hour) => hour.date), [hoursLocal])
  const nearestTextHourDate = useMemo(() => getNearestDate(allDates), [allDates])
  const activeHourIndex = useMemo(
    () => hoursLocal.findIndex((hour) => isActive(hour.date)),
    [nearestTextHourDate]
  )

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={47}
        naturalSlideHeight={93}
        totalSlides={25}
        visibleSlides={5}
        step={1}
        dragStep={1}
        currentSlide={activeHourIndex}>
        <Slider style={{ gap: '14px' }}>
          {/*empty slide for correct first render slide*/}
          <Slide index={0}>
            <div className={'hourly-forecast__empty-slide'}></div>
          </Slide>
          {hoursLocal.map((hour, index) => (
            <Slide index={index + 1} key={hour.time} style={{ 'padding-bottom': '88px' }}>
              {HourlyForecastCard({
                imgSrc: hour.condition.icon,
                time: getTimeFromDateTime(hour.date),
                temp: hour.temp_c,
                textState: hour.condition.text,
                isActive: isActive(hour.date)
              })}
            </Slide>
          ))}
        </Slider>
        <div className={'hourly-forecast__dots'}>
          <Dot className={'hourly-forecast__dots__dot'} slide={0} />
          <Dot className={'hourly-forecast__dots__dot'} slide={5} />
          <Dot className={'hourly-forecast__dots__dot'} slide={10} />
          <Dot className={'hourly-forecast__dots__dot'} slide={15} />
          <Dot className={'hourly-forecast__dots__dot'} slide={20} />
        </div>
      </CarouselProvider>
    </div>
  )
}
