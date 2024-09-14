import { getFormattedDayAndDate } from '../../utils/dateTime'
import './Location.scss'

export default function Location({ city, country }: { city: string; country: string }) {
  const { textDay, date } = getFormattedDayAndDate()
  return (
    <div className={'location'}>
      <h1 className={'location__main'}>
        {city}, <br /> {country}
      </h1>
      <h2 className={'location__date-time'}>
        {textDay}, {date}
      </h2>
    </div>
  )
}
