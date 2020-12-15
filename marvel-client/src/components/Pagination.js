const Pagination = (props) => {
  return (
    <div className="marvel-pagination">
      <div className="pagination-header">
        <div className="pagination-text">
          <h4 className="title-meta">
            Total Items <span className="text-number">{props.totalItems}</span>
          </h4>
        </div>

        <div className="pagination-controls ">
          <ul class="pagination">
            <li class="page-item">
              <button className="page-link " onClick={props.prevAction}>
                Previous
              </button>
            </li>
            <li>
              {props.pageNumber} /{props.totalPages}
            </li>
            <li class="page-item">
              <button className="page-link " onClick={props.nextAction}>
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
