const Pagination = (props) => {
  return (
    <div>
      <h4>
        Total Items <span className="text-number">{props.totalItems}</span>
      </h4>
      <div>
        <div>
          <a href="#" className="btn btn-primary " onClick={props.prevAction}>
            Previous
          </a>
          {props.pageNumber} /{props.totalPages}
          <a href="#" className="btn btn-primary " onClick={props.nextAction}>
            Next
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
