'use client'
import { CartItem } from '@/types/utilsType';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'



type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cartItems')
      if (storedCart) {
        setCartItems(JSON.parse(storedCart))
      }
    } catch (err) {
      console.error('Failed to load cart from localStorage:', err)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === item.id)
      if (exists) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      }
      return [...prev, item]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
