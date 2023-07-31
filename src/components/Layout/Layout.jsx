import Header from "../Header/Header"
import style from './Layout.module.scss'

function Layout({ children }) {
    return (
        <div className={style.main}>
            <Header />
            {children}
        </div>
    )
}

export default Layout