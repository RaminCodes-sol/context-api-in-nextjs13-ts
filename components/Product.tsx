

const Product = ({ product }: { product: Product }) => {
  return (
    <div className="mb-2 border-b px-3 py-1 border-b-[#5b5b5b]">
      <h1>name: {product.name}</h1>
      <h3>price: <span className="text-green-600">${product.price}</span></h3>
    </div>
  )
}

export default Product