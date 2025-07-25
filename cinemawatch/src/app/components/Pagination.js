import React from "react";

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const maxButtons = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    

}