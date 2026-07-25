import React, { createContext, useState } from 'react'
export let Context=createContext()
const MainContext = ({children}) => {
  const [product, setproduct] = useState(
    JSON.parse(localStorage.getItem('product'))||[]
  )

  return (
    <div>
      <Context.Provider value={{
        product,
        setproduct,

      }}>
      {children}
      </Context.Provider>
    </div>
  )
}

export default MainContext