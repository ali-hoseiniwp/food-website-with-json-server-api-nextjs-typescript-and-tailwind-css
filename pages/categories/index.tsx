import CategoriesPage from '@/components/templates/CategoriesPage';
import { DetailType, FoodItemType } from '@/types/menuItemTypes';
import { GetServerSideProps } from 'next';
import React from 'react';

interface CategoriesProps {
  data: FoodItemType[];
}

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default Categories;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { difficulty, time },
  } = context;

  if (!difficulty && !time) {
    return {
      props: {
        data: [],
      },
    };
  }

  const res = await fetch("https://api-food-livid.vercel.app/data");
  const data: FoodItemType[] = await res.json();

  const filteredData = data.filter((item) => {
    // تایپ‌دهی detail با استفاده از DetailType
    const detail = item.details.reduce((acc, curr) => ({ ...acc, ...curr }), {} as DetailType);

    const matchesDifficulty =
      difficulty &&
      detail.Difficulty &&
      detail.Difficulty.toLowerCase() === String(difficulty).toLowerCase();

    const cookingTimeRaw = detail["Cooking Time"] || "";
    const timeValue = cookingTimeRaw.split(" ")[0];
    const timeNumber = parseInt(timeValue);
    const matchesTime =
      !isNaN(timeNumber) &&
      (time === "less" ? timeNumber <= 30 : time === "more" ? timeNumber > 30 : false);

    if (difficulty && time) return matchesDifficulty && matchesTime;
    if (difficulty) return matchesDifficulty;
    if (time) return matchesTime;

    return true;
  });

  return {
    props: {
      data: filteredData,
    },
  };
};
