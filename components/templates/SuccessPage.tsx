import { useEffect } from 'react'
import { useRouter } from 'next/router'

const SuccessPage = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 10000)

    return () => clearTimeout(timer)
  }, [router]) // اضافه کردن router به وابستگی‌ها

  const handleContinueShopping = () => {
    router.push('/menu')
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 text-center mt-40">
      <div className="text-green-500 text-5xl mb-4">✔️</div>
      <h1 className="text-2xl max-sm:text-[18px] font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Thank you for your purchase. Your order has been submitted and is being processed.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        You will be redirected to the home page shortly...
      </p>

      <button
        onClick={handleContinueShopping}
        className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-2 rounded-lg transition duration-200 w-fit">
        Continue Shopping
      </button>
    </div>
  )
}

export default SuccessPage
