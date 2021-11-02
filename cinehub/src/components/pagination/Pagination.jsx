import React from "react";
import "./index.css";


const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
 
  return (
    <nav>
      {pageNumbers.map((number) => (
        <button className="pag_btn" key={number} onClick={() => paginate(number)}>{number}</button>
      ))}
    </nav>
  );
};

export default Pagination;