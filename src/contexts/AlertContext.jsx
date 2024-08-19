import { createContext } from 'react'
import Toast from 'react-native-root-toast'

export const AlertContext = createContext({
  alert: (message) => {},
})

const options = {
  position: Toast.positions.BOTTOM,
  duration: 100,
  backgroundColor: 'black',
  textColor: 'white',
}

export const AlertContextProvider = (props) => {
  const alert = (message) => {
    Toast.show(message, options)
  }

  return <AlertContext.Provider value={{ alert }}>{props.children}</AlertContext.Provider>
}
