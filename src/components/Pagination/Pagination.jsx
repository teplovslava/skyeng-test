import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss'



function Pagination({ count = 30, page, setPage }) {

  const itemsPerPage = 30
  const pageCount = Math.ceil(count / itemsPerPage);


  function changePage(e) {
    setPage(prev => prev = e.selected + 1)
  }


  return (
    <>
      <ReactPaginate
        forcePage={page - 1}
        containerClassName={style.overlay}
        breakClassName={style.steps}
        activeClassName={style.activeStep}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => changePage(e)}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}


export default Pagination

