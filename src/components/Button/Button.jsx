import style from './Button.module.scss'

function Button({ type, title, onClick }) {
  return (
    <button className={`${style.button} ${type === 'primary' ? style.buttonPrimary : style.buttonSecondary}`} onClick={onClick && onClick}>
      {title}
    </button>
  )
}

export default Button