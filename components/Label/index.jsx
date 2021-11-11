import "./label.scss"

export default function Label(props) {
  const { children, htmlFor } = props

  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  )
}
