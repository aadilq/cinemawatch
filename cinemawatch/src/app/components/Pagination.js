import React from "react";

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const maxButtons = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));

    const endPage = Math.min(totalPages, startPage + maxButtons - 1);

    const adjustedStartPage = Math.max(1, endPage - maxButtons + 1);

    const pages = Array.from({ length: endPage - adjustedStartPage + 1}, 
        (_, i) => adjustedStartPage + i)

    return(
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage == 1 ? 'disabled' : ''}`}>
                    <button
                    className="page-link"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}>
                        &laquo;
                    </button>
                </li>
                {pages.length > 0 && pages.map((page, index) => (
                    <li
                    key={index}
                    className={`page-item ${currentPage == page ? 'active': ''}`}
                    >
                        <button
                        className="page-link"
                        onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                 <li className={`page-item ${currentPage == 1 ? 'disabled' : ''}`}>
                 <button
                    className="page-link"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                        &raquo;
                        </button>
                 </li>
            </ul>
        </nav>
    )
};

export default Pagination;