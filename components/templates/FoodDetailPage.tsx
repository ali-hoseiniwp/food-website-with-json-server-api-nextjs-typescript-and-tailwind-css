'use client'
import { FoodItemType } from '@/types/menuItemTypes'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import Breadcrumb from '../modules/Breadcrumb'
import { useCart } from '@/context/CartContext'

interface FoodDetailsPageProps {
  item: FoodItemType
}

const FoodDetailsPage = ({ item }: FoodDetailsPageProps) => {
  const {
    name,
    image,
    discount,
    price,
    introduction,
    details,
    ingredients,
    recipe,
    id,
  } = item

  const finalPrice = discount > 0 ? price - (price * discount) / 100 : price

  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: finalPrice,
      image,
      quantity: 1,
      discount,
      introduction,
      details,
      ingredients,
      recipe
    })
  }

  return (
    <div className="max-w-4xl mx-auto py-4 my-16">
      <div className='w-full flex justify-between items-start'>
        <span className='py-1 border-b-4 border-brandColor mb-12 text-2xl font-bold'>Details</span>
        <Breadcrumb />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <Image
          src={image}
          alt={name}
          width={350}
          height={300}
          className="rounded-lg object-cover mt-10 sm:w-[350px] w-full"
        />
        <div className="space-y-4 flex flex-col justify-between items-start h-full w-full sm:w-fit">
          <h1 className="text-2xl font-bold  text-brandColor mb-4">{name}</h1>
          <h3 className="text-2xl font-semibold text-green-600">${finalPrice}</h3>

          {discount > 0 && (
            <div className="text-gray-600 text-lg">
              <span className="ml-2 line-through dark:text-slate-300">${price}</span>
            </div>
          )}
          {details.some((d) => d.Cuisine) && (
            <div className="flex items-center text-gray-600 dark:text-slate-300">
              <FaLocationDot className="mr-2 text-lg" />
              <span className='mb-2'>{details.find((d) => d.Cuisine)?.Cuisine}</span>
            </div>
          )}
          {discount > 0 && (
            <p className="bg-red-100 text-red-600 px-3 inline-block rounded-full text-sm font-medium">
              {discount}% OFF
            </p>
          )}
        </div>
      </div>
      <p className="text-gray-700 text-base leading-relaxed mb-6 dark:text-slate-300">{introduction}</p>
      <div className="mb-8">
        <h4 className="text-xl font-bold mb-3 mt-5 text-brandColor">Food Details</h4>
        <ul className="space-y-2 text-gray-700">
          {details.map((detail, index) => {
            const [key, value] = Object.entries(detail)[0]
            return (
              <li key={index} className="flex gap-2">
                <p className="font-medium dark:text-slate-200">{key}:</p>
                <span className='dark:text-slate-400'>{value}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mb-8">
        <h4 className="text-xl font-bold mb-3 mt-5 text-brandColor">Ingredients</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 dark:text-slate-300">
          {ingredients.map((item, idx) => (
            <li key={idx} className='marker:text-brandColor'>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-bold my-6 text-brandColor">Recipe Instructions</h4>
        <div className="space-y-4">
          {recipe.map((step, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg ${idx % 2 === 0 ? 'bg-[#bcff93] dark:bg-slate-700' : 'bg-[#e8ffdb] dark:bg-slate-500'}`}>
              <span className="font-bold mr-2">{idx + 1}.</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
        Add to Cart
      </button>
    </div>
  )
}

export default FoodDetailsPage
