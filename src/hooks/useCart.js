import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const useCart = () => {
  const { addItem, items } = useContext(CartContext)

  const addItemToCart = (id, item) => {
    addItem(id, item)
  }

  return {
    addItemToCart,
    items: Object.values(items),
  }
}
