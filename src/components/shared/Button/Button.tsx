import './Button.scss'
export function Button({type = 'button', content}: {type?: "button" | "submit" | "reset", content: string}) {

    return (<button className={'button'} type={type}>{content}</button>)
}