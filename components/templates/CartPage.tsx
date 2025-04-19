'use client'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import { FaTrashAlt } from 'react-icons/fa'
import Link from 'next/link'

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, addToCart } = useCart()

  const handleRemove = (id: number) => {
    removeFromCart(id)
  }

  const handleClearCart = () => {
    clearCart()
  }

  const increaseQuantity = (itemId: number) => {
    const item = cartItems.find(i => i.id === itemId)
    if (item) {
      addToCart({ ...item, quantity: 1 })
    }
  }

  const decreaseQuantity = (itemId: number) => {
    const item = cartItems.find(i => i.id === itemId)
    if (item && item.quantity > 1) {
      const updatedItem = { ...item, quantity: -1 }
      addToCart(updatedItem)
    } else if (item && item.quantity === 1) {
      removeFromCart(itemId)
    }
  }

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price)
    const discount = Number(item.discount)
    const finalPrice = price * (1 - discount / 100)
    return sum + finalPrice * item.quantity
  }, 0)

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 min-h-screen pt-24">
        <h2 className="text-xl font-bold mb-6">Your cart is empty!</h2>
        <Link href="/menu" className="text-orange-500">Back to Menu</Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto py-10 min-h-screen my-24">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map(item => {
          const unitPrice = Number(item.price)
          const discount = Number(item.discount)
          const discountedPrice = unitPrice * (1 - discount / 100)
          const finalItemPrice = discountedPrice * item.quantity

          return (
            <div key={item.id} className="dark:bg-slate-700 rounded-xl p-4 shadow-md">
              <div className="flex flex-col xs:flex-row gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={150}
                  className="rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="mt-2 text-sm text-gray-700 dark:text-slate-300">
                        Unit Price: <span className="font-semibold">${unitPrice.toFixed(2)}</span>{' '}
                        {discount > 0 && (
                          <span className="text-red-500 ml-2">({discount}%)</span>
                        )}
                      </p>

                      <div className="mt-4 flex items-center gap-4">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-200 hover:bg-gray-300 text-black w-8 h-8 rounded-full text-lg font-bold"
                        >−</button>
                        <span className="text-lg font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-200 hover:bg-gray-300 text-black w-8 h-8 rounded-full text-lg font-bold"
                        >+</button>
                      </div>

                      <p className="text-sm mt-3 font-medium">
                        Total: ${finalItemPrice.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xl font-bold">
          Grand Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
          <Link
            href="/checkout"
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
