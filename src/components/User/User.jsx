import Button from '../Button/Button'
import style from './User.module.scss'
import iconBack from '../../sources/img/icon__back.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Repos from '../Repos/Repos'


function User() {
    const location = useLocation()
    const [reps, setReps] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const user = location.state.user


    const getReps = async () => {
        try {
            setLoading(true)
            let result = await axios.get(user.repos_url)
            setReps(result)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getReps()
    }, [])



    return (
        <div className={style.main}>
            <div onClick={() => navigate(-1)} className={style.backBtn}>
                <img src={iconBack} alt='' />
            </div>
            <img className={style.userAvatar} src={user.avatar_url} alt="" />
            <div className={style.userLogin}>{user.login}</div>
            <div className={style.userRaiting}>Рейтинг: {user.score}</div>
            <div className={style.userReps}>{reps.data?.length ? `Репозитории: ${reps.data?.length}` : ''}</div>
            <div className={style.userNav}>
                <Button type='secondary' title='В избранное'></Button>
                <a href={user.html_url}>
                    <Button type='primary' title='Перейти в Github'></Button>
                </a>
            </div>
            <div className={style.userRepsList}>
                {
                    loading
                        ? 'Загрузка...'
                        : reps.data?.length
                            ? reps.data.map((item) => <Repos key={item.id} info={item} />)
                            : ''
                }
            </div>
        </div>
    )
}

export default User