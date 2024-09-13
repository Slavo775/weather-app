import {ForecastWeatherHourResponse} from "../../types/weatherDataResponse";
import HourlyForecastCard from "../HourlyForecastCard/HourlyForecastCard";
import {getNearestDate, getTimeFromDateTime} from "../../utils/dateTime";
import {useMemo} from "react";

export default function HourlyForecast({hours}: {hours: ForecastWeatherHourResponse[]}) {

    //create new local computed for create Date object for all hours (better optimization Date object created once)
    const hoursLocal = useMemo<(ForecastWeatherHourResponse & {date: Date})[]>(() => hours.map(hour => ({...hour, date: new Date(hour.time)})), [hours])
    const allDates = useMemo(() => hoursLocal.map(hour => hour.date), [hoursLocal])
    const nearestTextHourDate = useMemo(() => getNearestDate(allDates), [allDates])

    const isActive = (date: Date) => {
        return date.getTime() === nearestTextHourDate.getTime()
    }

    return (
        <div>
            {hoursLocal.map(hour => HourlyForecastCard({imgSrc: hour.condition.icon, time: getTimeFromDateTime(hour.date), temp: hour.temp_c, textState: hour.condition.text, isActive: isActive((hour.date)), key: hour.time}))}
        </div>
    )
}