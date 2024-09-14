import Input from '../shared/Input/Input'
import { BaseSyntheticEvent, useState } from 'react'
import { Button } from '../shared/Button/Button'
import './SearchForm.scss'

export function SearchForm({
  getWeatherData
}: {
  getWeatherData: (location: string) => Promise<void>
}) {
  const [inputValue, setInputValue] = useState('')
  const onSearchSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault()
    await getWeatherData(inputValue)
  }
  return (
    <form className={'search-form'} onSubmit={onSearchSubmit}>
      <Input value={inputValue} setValue={setInputValue} />
      <Button type={'submit'} content={'Vyhladaj'} />
    </form>
  )
}
