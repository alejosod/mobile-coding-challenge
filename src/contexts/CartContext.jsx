import React, { createContext } from 'react'

export const CartContext = createContext({
  items: {},
  addItem: () => {},
  removeItem: () => {},
})

export const CartContextProvider = (props) => {
  const { children } = props

  const [items, setItems] = React.useState({})

  const addItem = (id, item) => {
    if (id in items) {
      setItems((prev) => ({
        ...prev,
        [id]: { ...prev[id], itemsNumber: prev[id].itemsNumber + 1 },
      }))
    } else if (item) {
      setItems((prev) => ({ ...prev, [id]: { ...item, itemsNumber: 1 } }))
    }
  }

  const removeItem = (id) => {
    if (id in items) {
      const shouldRemoveItem = items[id].itemsNumber <= 1

      if (shouldRemoveItem) {
        setItems((prev) => {
          const newItems = { ...prev }
          delete newItems[id]

          return newItems
        })
      } else {
        setItems((prev) => ({
          ...prev,
          [id]: { ...prev[id], itemsNumber: prev[id].itemsNumber - 1 },
        }))
      }
    }
  }

  const value = {
    items,
    addItem,
    removeItem,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
