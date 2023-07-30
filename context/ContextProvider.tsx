'use client'
import { useState } from 'react'
import { ProductContext } from './ProductContext'



const ContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [products, setProducts] = useState<Product[]>([])

  const addProduct = (product: Product) => {
    product.id = Math.random() * products.length * 2;
    setProducts([product, ...products])
  }


  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      { children }
    </ProductContext.Provider>
  )
}

export default ContextProvider