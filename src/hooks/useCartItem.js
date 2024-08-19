import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const useCartItem = (itemId) => {
  const { items, addItem, removeItem } = useContext(CartContext)

  const addItemToCart = (id, item) => {
    addItem(id, item)
  }

  const removeItemFromCart = (id) => {
    removeItem(id)
  }

  return {
    itemsNumber: items[itemId]?.itemsNumber ?? 0,
    addItemToCart,
    removeItemFromCart,
  }
}
