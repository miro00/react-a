import styles from "./input.module.scss";

export default function Input(props) {
  const { type, placeholder, autoComplete, maxL, minL, id } = props;

  return (
    <input
      className={styles.input}
      id={id}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      maxLength={maxL}
      minLength={minL}
    />
  );
}

Input.defaultProps = {
  type: "text",
};
