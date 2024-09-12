import {BaseSyntheticEvent, Dispatch, SetStateAction} from "react";
import './Input.scss'

export default function Input({value, setValue, placeholder}: {value: string, setValue: Dispatch<SetStateAction<string>>, placeholder?: string}) {
    const onInputChange = (event: BaseSyntheticEvent) => {
        setValue(event.target?.value ?? '')
    }

    return (
        <input type="text" className="header-input" placeholder={placeholder} onChange={onInputChange} value={value}/>
    )
}
//fe43ace2c53f41f1b63111821241209