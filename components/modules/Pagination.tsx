'use client';

import React, { useEffect } from 'react';
import {
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPageNumbers = () => {
    const pages = [];
    const range = 1;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - range && i <= currentPage + range)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-3 py-1 rounded border transition ${
              currentPage === i
                ? 'bg-brandColor text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {i}
          </button>
        );
      } else if (
        i === currentPage - range - 1 ||
        i === currentPage + range + 1
      ) {
        pages.push(
          <span key={`dots-${i}`} className="px-2  text-gray-500 text-2xl gap-2 flex">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-12 gap-2 flex-wrap">
      {/* First Page */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-2 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-70"
      >
        <IoIosArrowBack size={22} />
      </button>

      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-70"
      >
        <IoMdArrowDropleft size={28} />
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-70"
      >
        <IoMdArrowDropright size={28} />
      </button>

      {/* Last Page */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-2 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-70"
      >
        <IoIosArrowForward size={22} />
      </button>
    </div>
  );
};

export default Pagination;
