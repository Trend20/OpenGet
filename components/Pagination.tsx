"use client";

import ReactPaginate from "react-paginate";
import styles from "../styles/pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8">
      <div className={`${styles.container} w-full md:w-auto mb-4 md:mb-0`}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={currentPage}
          onPageChange={onPageChange}
          className={styles["react-paginate"]}
        />
      </div>
      <p className="flex p-2 rounded-md border border-grey bg-blue-gray-50">
        {totalPages} pages
      </p>
    </div>
  );
};

export default Pagination;
