import logo from '../../sources/img/skyeng-logo-dark.svg'
import style from './Header.module.scss'

function Header() {
    return (
        <header className={style.main}>
            <div className={style.logo}>
                <a href='https://skyeng.ru' className={style.logoLink}>
                    <img src={logo} alt="skyeng" className={style.logoImg} />
                </a>
            </div>
        </header>
    )
}

export default Header