import './CurrentCondition.scss'

// Component display for display image of current weather and temp with description
export function CurrentCondition({
  imgSource,
  temp,
  currentState
}: {
  imgSource: string
  temp: number
  currentState: string
}) {
  return (
    <div className={'current-condition'}>
      <img className={'current-condition__image'} src={imgSource} alt={`${currentState} obrazok`} />
      <div className={'current-condition__text-info'}>
        <div className={'current-condition__text-info__temp'}>{temp.toFixed(0)}°</div>
        <div className={'current-condition__text-info__current-state'}>{currentState}</div>
      </div>
    </div>
  )
}
