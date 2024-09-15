import Input from '../shared/Input/Input'
import { type BaseSyntheticEvent, type Dispatch, type SetStateAction, useState } from 'react'
import { Button } from '../shared/Button/Button'
import './SearchForm.scss'
import { useWeatherData } from '../../use/weatherData'

/* Component include form for submitting search location
   for input component and close button is set prop aria-label attribute for better accessibility */
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
        <Input
          value={inputValue}
          setValue={setInputValue}
          placeholder={'Napr. Zilina'}
          ariaLabel={'Vyhľadaj lokalitu'}
        />
        <button
          type={'button'}
          className={'search-form__input__button'}
          onClick={() => setIsFormShown(false)}
          aria-label={'Zatvor vyhľadávací formulár'}>
          X
        </button>
      </div>
      <Button type={'submit'} content={'Vyhľadaj'} />
    </form>
  )
}
