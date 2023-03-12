
const Pagination = (props) => {
    const {pageCount, currentPage, handlePageChange, handleLimitChange} = props
    
    return (
        <div className="pag-nav">
            <div className="pag-set">
          <label htmlFor="pageLimit">Показать по: </label>
          <select id="pageLimit">
            <option onClick={handleLimitChange} value={10}>
              10
            </option>
            <option onClick={handleLimitChange} value={25}>
              25
            </option>
            <option onClick={handleLimitChange} value={50}>
              50
            </option>
          </select>
        </div>
        {pageCount>1 && <div className="pag-but-group">
            <input type='button' onClick={handlePageChange} value='Назад' disabled={currentPage===0}/>
            {[...Array(pageCount).keys()].map((value, i) => (
                <input
                  type="button"
                  key={i}
                  value={i + 1}
                  onClick={handlePageChange}
                  className={(currentPage===i)?'active':''}
                />
              ))}
            <input type='button' onClick={handlePageChange} value='Вперед' disabled={(currentPage+1)===pageCount}/>
            </div>}
        </div>
            
    )
    
}

export default Pagination;