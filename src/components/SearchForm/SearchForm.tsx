import Input from '../shared/Input/Input'
import { type BaseSyntheticEvent, type Dispatch, type SetStateAction, useState } from 'react'
import { Button } from '../shared/Button/Button'
import './SearchForm.scss'
import { useWeatherData } from '../../use/weatherData'
export default function SearchForm({
  setIsFormShown
}: {
  setIsFormShown: Dispatch<SetStateAction<boolean>>
}) {
  const [inputValue, setInputValue] = useState('')
  const { getWeatherData } = useWeatherData()
  const onSearchSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault()
    await getWeatherData(inputValue)
  }
  return (
    <form className={'search-form'} onSubmit={onSearchSubmit}>
      <div className={'search-form__input'}>
        <Input value={inputValue} setValue={setInputValue} placeholder={'Napr. Zilina'} />
        <button
          type={'button'}
          className={'search-form__input__button'}
          onClick={() => setIsFormShown(false)}>
          X
        </button>
      </div>
      <Button type={'submit'} content={'Vyhladaj'} />
    </form>
  )
}
