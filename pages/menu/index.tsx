import MenuPage from '@/components/templates/MenuPage'
import { MenuProps } from '@/types/menuItemTypes'
import { GetStaticProps } from 'next'
import React from 'react'



const Menu: React.FC<MenuProps> = ({ data }) => {
  return (
    <MenuPage data={data} />
  )
}

export default Menu

export const getStaticProps: GetStaticProps<MenuProps> = async () => {
  const res = await fetch("https://api-food-livid.vercel.app/data");
  const data = await res.json();

  return {
    props: { data },
  };
};
