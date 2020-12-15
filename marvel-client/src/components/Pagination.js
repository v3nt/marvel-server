const Pagination = ({
  totalItems,
  pageNumber,
  prevAction,
  nextAction,
  totalPages,
  handlePageChange,
}) => {
  const classes = (pageNumber, itemNum, closeness) => {
    if (parseInt(pageNumber) === itemNum) {
      return "page-item num active";
    } else if (
      itemNum - pageNumber < closeness &&
      itemNum - pageNumber > 0 - closeness
    ) {
      return "page-item num item-close";
    } else {
      return "page-item num not-close";
    }
  };

  const pageIcons = [...Array(totalPages)].map((elementInArray, index) => {
    if (index !== 0) {
      return (
        <li key={index} className={classes(pageNumber, index, 4)}>
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
          <p className="title-meta">
            Total Items <span className="text-number">{totalItems}</span>
          </p>
        </div>

        <div className="pagination-controls ">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={prevAction}>
                Previous
              </button>
            </li>
            <li className="page-item elipse">
              <button className="page-link" onClick={() => handlePageChange(1)}>
                ...
              </button>
            </li>
            {pageIcons}
            <li className="page-item elipse">
              <button
                className="page-link"
                onClick={() => handlePageChange(totalPages)}
              >
                ...
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={nextAction}>
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
