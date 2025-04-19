import { GetStaticPaths, GetStaticProps } from 'next';
import { FoodItemType } from '@/types/menuItemTypes';
import FoodDetailPage from '@/components/templates/FoodDetailPage';
import Breadcrumb from '@/components/modules/Breadcrumb';
import React from 'react';

interface DetailProps {
  item: FoodItemType;
}

const FoodDetail: React.FC<DetailProps> = ({ item }) => {
  return (
    <div>
      <Breadcrumb item={item} />
      <FoodDetailPage item={item} />
    </div>
  );
};

export default FoodDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api-food-livid.vercel.app/data');
  const data: FoodItemType[] = await res.json();

  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://api-food-livid.vercel.app/data');
  const data: FoodItemType[] = await res.json();

  const item = data.find((item) => item.id.toString() === context.params?.id);

  return {
    props: { item },
  };
}
