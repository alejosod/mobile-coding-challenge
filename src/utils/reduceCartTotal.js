
export const reduceCartTotal = (
  accumulator,
  currentValue,
) => accumulator + currentValue.itemsNumber * currentValue.price
