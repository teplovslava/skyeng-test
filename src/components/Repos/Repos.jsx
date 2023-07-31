import style from './Repos.module.scss'
import linkIcon from '../../sources/img/icon__link.svg'
import eyeIcon from '../../sources/img/icon__eye.svg'

function Repos({ info }) {
  return (
    <a className={style.main} href={info.html_url}>
      <div className={style.name}>{info.name}</div>
      <div className={style.descr}>{info.description}</div>
      <a href={info.homepage ? info.homepage : '#'} className={style.pages} title="github-pages">
        {info.homepage ? <img src={linkIcon} /> : ''}
      </a>
      <div className={`${style.private} ${!info.private ? style.private_non : style.private_dangerous}`}> {!info.private ? 'Не приватный' : 'Приватный'} </div>
      <div className={style.watchers}>
        <img src={eyeIcon} alt="" />
        <p>{info.watchers}</p>
      </div>
    </a>
  )
}

export default Repos