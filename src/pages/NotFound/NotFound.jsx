import { Link } from 'react-router-dom'
import style from './NotFound.module.scss'

function NotFound() {
  return (
    <div className={style.main}>
        <h2>Извините, такой страницы не существует😔 </h2>
        <p>попробуйте другой адрес</p>
        <Link to='/skyeng-test/'>На главную</Link>
    </div>
  )
}

export default NotFound