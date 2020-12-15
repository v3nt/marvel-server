const Pagination = (props) => {
  return (
    <div>
      <div>totalItems {props.totalItems}</div>
      <div>
        <div>
          <button onClick={props.prevAction}>Previous </button>
          {props.pageNumber} /{props.totalPages}
          <button onClick={props.nextAction}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
