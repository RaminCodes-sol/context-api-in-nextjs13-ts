'use client'
import { useProductContext } from "@/context/ProductContext"
import { useState } from "react"



const AddProducts = () => {
  const [name, setName] = useState<string>('')
  const [price , setPrice] = useState<string>('')
  const { addProduct } = useProductContext()



  /*-------HandleChange-------*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else {
      setPrice(e.target.value)
    }
  }


  /*-------AddNewProduct-------*/
  const addNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!name.length || !price.length) {
      alert('please fill all inputs!')
      return
    }

    addProduct({ name, price })
    setName('')
    setPrice('')
  }


  return (
    <section className="mt-10">
      <form onSubmit={addNewProduct} className=' w-full max-w-[500px] flex flex-col gap-5 m-auto'>
        <input type="text" value={name} name='name' placeholder='product name...' onChange={handleChange} className="px-2 py-3 flex-1 text-black" />
        <input type="text" value={price} name='price' placeholder='product price...' onChange={handleChange} className="px-2 py-3 flex-1 text-black" />
        <button className="text-center px-2 py-3 bg-purple-600 transition-colors hover:bg-purple-700">add product</button>
      </form>
    </section>
  )
}

export default AddProducts