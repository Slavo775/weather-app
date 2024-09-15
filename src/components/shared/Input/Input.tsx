import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import './Input.scss'

export default function Input({
  value,
  setValue,
  placeholder,
  ariaLabel
}: {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  placeholder?: string
  ariaLabel?: string
}) {
  const onInputChange = (event: BaseSyntheticEvent) => {
    setValue(event.target?.value ?? '')
  }

  return (
    <input
      type="text"
      className="header-input"
      placeholder={placeholder}
      onChange={onInputChange}
      value={value}
      aria-label={ariaLabel}
    />
  )
}
