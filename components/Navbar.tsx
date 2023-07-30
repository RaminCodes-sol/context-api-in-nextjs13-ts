import Link from 'next/link'



const Navbar = () => {
  return (
    <nav className='w-full p-6 border-b border-b-[#444] flex justify-center items-center gap-5 text-xl'>
      <Link href='/'>Home</Link>
      <Link href='/addProduct'>Add Products</Link>
    </nav>
  )
}

export default Navbar