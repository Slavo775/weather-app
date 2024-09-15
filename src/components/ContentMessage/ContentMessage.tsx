// Component for display custom messages for information user about current states of app (Loading, Empty result, Type search term)
export default function ContentMessage({ message }: { message: string }) {
  return <div className={'content-message'}>{message}</div>
}
