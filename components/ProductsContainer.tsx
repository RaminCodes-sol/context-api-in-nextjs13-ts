'use client'
import { useProductContext } from "@/context/ProductContext"
import Product from "./Product"




const ProductsContainer = () => {
  const { products } = useProductContext()

  
  if (!products.length) return <h1 className="text-center p-7 text-red-500">no products added yet!</h1>

  
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="py-6 text-xl">Products</h1>
      <div>
        { products?.map((product, index) => <Product key={index} product={product} />)}
      </div>      
    </section>
  )
}

export default ProductsContainer