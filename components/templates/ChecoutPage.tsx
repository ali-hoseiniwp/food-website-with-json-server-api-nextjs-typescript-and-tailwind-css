'use client'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CheckoutPage = () => {
  const router = useRouter()
  const { cartItems, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price)
    const discount = Number(item.discount)
    const finalPrice = price * (1 - discount / 100)
    return sum + finalPrice * item.quantity
  }, 0)

  const handleSubmitOrder = async () => {
    const order = {
      orderid: Date.now().toString(),
      userId: '', // فرض بر این است که این مقدار از حالت لاگین گرفته می‌شود یا به صورت پیش‌فرض خالی است.
      userName: '', // مشابه مورد بالا
      items: cartItems,
      totalPrice: Number(totalPrice.toFixed(2)),
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    try {
      setIsSubmitting(true)
      await fetch('https://api-tasks-wheat.vercel.app/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })

      clearCart() // سبد خرید پاک می‌شود
      router.push('/checkout/success') // هدایت به صفحه موفقیت
    } catch (error) {
      console.error(error)
      alert('Error connecting to server')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-16 my-20 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-center">Checkout</h1>
      <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md space-y-4">
        <div>
          <h2 className="font-bold mb-2">Cart Items:</h2>
          <ul className="list-disc ml-6 space-y-1">
            {cartItems.map(item => (
              <li key={item.id} className='marker:text-brandColor'>
                {item.name} × <span className='text-orange-500 font-bold text-xl'>{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-bold dark:text-slate-300 text-lg">
          <span className='text-brandColor text-xl font-semibold'>Total Price:</span> ${totalPrice.toFixed(2)}
        </div>
        <button
          onClick={handleSubmitOrder}
          disabled={isSubmitting}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Place Order'}
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
