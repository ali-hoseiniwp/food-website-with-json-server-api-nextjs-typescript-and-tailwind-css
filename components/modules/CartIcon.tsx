'use client'
import { HiShoppingBag } from 'react-icons/hi'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'

const CartIcon = () => {
  const { cartItems } = useCart()
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link href="/cart" className="relative ml-4">
      <HiShoppingBag size={28} className="text-orange-400 cursor-pointer" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-brandColor text-white text-xs rounded-full px-1 ">
          {cartCount}
        </span>
      )}
    </Link>
  )
}

export default CartIcon
