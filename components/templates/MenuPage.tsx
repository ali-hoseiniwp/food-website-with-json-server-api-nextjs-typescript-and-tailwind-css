'use client';

import { FoodItemType } from '@/types/menuItemTypes';
import React, { useEffect, useState } from 'react';
import FoodCard from '../modules/FoodCard';
import Pagination from '../modules/Pagination';
import SkeletonCard from '../modules/SkeletonCard';
import Breadcrumb from '../modules/Breadcrumb';

interface MenuPageProps {
  data: FoodItemType[];
}

const MenuPage: React.FC<MenuPageProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className="container mt-32 mb-20 md:mb-24">
      <div className='w-full flex justify-between items-start'>
      <h1 className="text-2xl text-brandColor mb-12 font-bold">Menu</h1>
      <Breadcrumb/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? [...Array(itemsPerPage)].map((_, i) => <SkeletonCard key={i} />)
          : currentItems.map((item) => <FoodCard key={item.id} item={item} />)}
      </div>

      {/* paginatin */}
      {totalPages > 1 && !loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default MenuPage;
