import {BaseSyntheticEvent, Dispatch, SetStateAction} from "react";
import './Input.scss'

export default function Input({value, setValue}: {value: string, setValue: Dispatch<SetStateAction<string>>}) {
    const onInputChange = (event: BaseSyntheticEvent) => {
        setValue(event.target?.value ?? '')
    }

    return (
        <input type="text" className="header-input" onChange={onInputChange} value={value}/>
    )
}
//fe43ace2c53f41f1b63111821241209