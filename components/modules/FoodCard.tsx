import { FoodCardProps } from '@/types/menuItemTypes';
import Link from 'next/link';
import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import Image from 'next/image'; // اضافه کردن Import برای Image

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const hasDiscount = item.discount > 0;
  const cuisine = item.details?.[0]?.Cuisine || 'Unknown';

  const finalPrice = hasDiscount
    ? (item.price - (item.price * item.discount) / 100).toFixed(2)
    : item.price.toFixed(2);

  return (
    <div className="bg-white dark:bg-slate-700 shadow-md rounded-xl p-4 flex flex-col justify-between">
      <div className="relative">
        <Image 
          src={item.image} 
          alt={item.name} 
          layout="responsive" // استفاده از layout responsive برای مقیاس‌بندی خودکار تصویر
          width={500}  // عرض تصویر (می‌توانید مقدار مناسب را انتخاب کنید)
          height={300} // ارتفاع تصویر (می‌توانید مقدار مناسب را انتخاب کنید)
          className="w-full object-cover rounded-md" 
        />
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-brandColor text-white text-xs font-bold px-2 py-1 rounded">
            {item.discount}% OFF
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold my-2">{item.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.introduction.slice(0, 100)}...</p>

      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-brandColor font-bold text-lg">${finalPrice}</p>
          {hasDiscount && (
            <p className="text-gray-400 text-sm line-through">${item.price.toFixed(2)}</p>
          )}
        </div>
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
          <LuMapPin size={16} />
          <span>{cuisine}</span>
        </div>
      </div>
      <Link
        href={`/menu/${item.id}`}
        className="mt-2 bg-brandColor text-white py-2 px-4 rounded hover:opacity-90 transition-all text-center"
      >
        See Details
      </Link>
    </div>
  );
};

export default FoodCard;
