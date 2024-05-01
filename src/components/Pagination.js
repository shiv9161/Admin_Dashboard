import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <a
                className="page-link"
                href="/"
                aria-label="Previous"
                onClick={() => paginate(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${currentPage === number && "active"}`}
              >
                <a
                  href="/"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(number);
                  }}
                >
                  {number}
                </a>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === Math.ceil(totalItems / itemsPerPage) &&
                "disabled"
              }`}
            >
              <a
                className="page-link"
                href="/"
                aria-label="Next"
                onClick={() => paginate(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
