import styles from "./button.module.scss"

export default function Button(props) {
  const { children, type, disabled, intent, onClick } = props
  return (
    <button onClick={onClick} className={`${styles.btn}${intent ? ` ${styles[intent]}` : ""}`} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
}
