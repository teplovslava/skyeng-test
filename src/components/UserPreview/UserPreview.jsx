import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import style from './UserPreview.module.scss'

function UserPreview({ user }) {
    return (
        <div className={style.user}>
            <div className={style.userName}>{user.login}</div>
            <div className={style.userLogo}>
                <img src={user.avatar_url} alt="" />
            </div>
            <div className={style.userRating}>Рейтинг: {user.score}</div>
            <div className={style.userRole}>Роль: {user.type}</div>
            <div className={style.userOpenBtn}>
                <div className={style.userOpenBtnLayout}>
                    <Link to={`/skyeng-test/user/${user.id}`} state={{ user }}>
                        <Button type='primary' title='Посмотреть' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserPreview