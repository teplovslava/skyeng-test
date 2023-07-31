import { declOfNum } from '../../service/declNums'
import style from './SearchInfo.module.scss'

function SearchInfo({ info }) {

    return (
        <div className={style.main}>
            {!!info && <p>Всего найдено {declOfNum(info, [`${info} пользователь`, `${info} пользователя`, `${info} пользователей`])} </p>}
        </div>
    )
}


export default SearchInfo