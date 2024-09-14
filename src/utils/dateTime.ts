export const getFormattedDayAndDate = () => {
  const now = new Date()
  const daysOfWeek = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedela']
  const dayOfWeek = daysOfWeek[now.getDay() - 1]
  const date = now.toLocaleDateString('en-GB')
  return { textDay: dayOfWeek, date: date.replaceAll('/', '.') }
}

export const getTimeFromDateTime = (date: Date) => {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${(hours < 10 ? '0' : '') + hours}:${(minutes < 10 ? '0' : '') + minutes}`
}

export const getNearestDate = (dates: Date[], target?: string) => {
  let targetDate: Date
  if (!target) {
    targetDate = new Date()
  } else {
    targetDate = new Date(target)
  }

  let nearest: number = Infinity
  let nearestDate: Date = targetDate

  dates.forEach(function (date) {
    let distance = Math.abs(date.getTime() - targetDate.getTime())
    if (distance < nearest) {
      nearest = distance
      nearestDate = date
    }
  })
  return nearestDate
}
