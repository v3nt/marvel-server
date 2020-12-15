const Pagination = ({
  totalItems,
  pageNumber,
  prevAction,
  nextAction,
  totalPages,
  handlePageChange,
}) => {
  const pageIcons = [...Array(totalPages)].map((elementInArray, index) => {
    if (index !== 0) {
      return (
        <li
          key={index}
          className={
            parseInt(pageNumber) === index ? "page-item active" : "page-item"
          }
        >
          <button
            className="page-link "
            onClick={() => handlePageChange(index)}
          >
            {index}
          </button>
        </li>
      );
    } else {
      return "";
    }
  });

  return (
    <div className="marvel-pagination">
      <div className="pagination-header">
        <div className="pagination-text">
          <h4 className="title-meta">
            Total Items <span className="text-number">{totalItems}</span>
          </h4>
        </div>

        <div className="pagination-controls ">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link " onClick={prevAction}>
                Previous
              </button>
            </li>
            {pageIcons}

            <li className="page-item">
              <button className="page-link " onClick={nextAction}>
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
