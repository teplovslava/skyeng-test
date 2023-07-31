import { useCallback, useContext, useEffect, useState } from "react"
import SearchInfo from "../SearchInfo/SearchInfo"
import Searching from "../Searching/Searching"
import UserPreview from "../UserPreview/UserPreview"
import style from './Main.module.scss'
import { Context } from "../../context/context"
import { getUsers } from "../../service/getUsers"
import Pagination from "../Pagination/Pagination"
import { useSearchParams } from 'react-router-dom';
import Loader from "../Skeleton/Skeleton"


function Main() {

  const [searchParams, setSearchParams] = useSearchParams({ q: '' })

  const urlParams = searchParams.get("q")

  const [users, setUsers] = useContext(Context)
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1)
  const [isOk, setIsOk] = useState(false)
  const [loading, setLaoding] = useState(false)
  const [sort, setSort] = useState(false)

  let timer = null

  async function onChangePage() {

    try {
      setUsers({ person: [], count: 0 })
      setLaoding(true)

      let res = await getUsers(`?q=${value}${page ? `&page=${page}` : `&page=1`}&sort=repositories&order=${sort ? 'asc' : 'desc'}`)
      setUsers({ ...users, person: res.data?.items, count: res.data?.total_count })

      setSearchParams({ q: value })
    } catch (err) {
      alert('Упс... Возникли какие-то проблемы!')
      console.log(err)
    } finally {
      setLaoding(false)
    }
  }







  const onChange = useCallback((event) => {
    setValue(event.target.value);
    clearTimeout(timer)

    if (event.target.value) {
      timer = setTimeout(async () => {

        try {
          setLaoding(true)
          setUsers({ ...users, person: [], count: 0 })
          let res = await getUsers(`?q=${event.target.value}&page=1&sort=repositories&order=${sort ? 'asc' : 'desc'}`)
          setUsers({ ...users, person: res.data?.items, count: res.data?.total_count })

        } catch (err) {
          console.log(err)
          alert('Упс... Возникли какие-то проблемы!')
        } finally {
          setLaoding(false)
        }

      }, 700)
    } else {
      setUsers({ person: [], count: 0 })
    }

    setSearchParams({ q: event.target.value })

  }, [])





  useEffect(() => {
    if (!!value) {
      onChangePage()
    }
  }, [page, sort])


  useEffect(() => {
    setPage(1)
  }, [value])

  useEffect(() => {
    setValue(urlParams)
    setIsOk(true)
    if (!!value) {
      onChangePage()
    }
  }, [isOk])

  return (
    <div className={style.main}>
      <Searching
        value={value}
        setValue={setValue}
        onChange={onChange}
        setSearchParams={setSearchParams}
        sort={sort}
        setSort={setSort}
        count={users.count}
      />
      <SearchInfo info={users.count} />
      {
        loading ?
          <div className={style.skeletonOverlay}>
            {Array(5).fill(0).map((_, i) => <Loader key={i} />)}
          </div>
          : !!users.person?.length
            ? users.person.map((item) => <UserPreview data-testid='list' key={item.id} user={item} />)
            : <div className={style.notFound}>Ничего не найдено</div>

      }
      <Pagination count={users.count} page={page} setPage={setPage} />
    </div>
  )
}

export default Main