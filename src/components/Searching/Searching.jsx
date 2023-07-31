import style from './Searching.module.scss'
import crossSvg from '../../sources/img/icon__cross.svg'
import { useContext, useRef } from 'react'
import { Context } from '../../context/context'

function Searching({ value, setValue, onChange, setSearchParams, sort, setSort, count }) {
  const inputRef = useRef()
  const [users, setUsers] = useContext(Context)

  function clearInput() {
    setValue('')
    setSearchParams({})
    setUsers({ ...users, person: [], count: 0 })
    inputRef.current.focus()
  }

  return (
    <div className={style.main}>
      <div className={style.searchLayout}>
        <input
          ref={inputRef}
          type="text"
          name="login"
          autoComplete="login"
          placeholder='Начните вводить...'
          value={value}
          onChange={onChange} />
        {value && <div className={style.iconCross} onClick={() => clearInput()}>
          <img data-testid='cross' src={crossSvg} alt="clear" />
        </div>}
      </div>
      {!!count ? <div onClick={() => setSort(prev => !prev)} className={style.sort}>Сортировать по {!!sort ? 'возрастанию  ↑' : 'убыванию  ↓'} </div> : ''}
    </div>
  )
}

export default Searching