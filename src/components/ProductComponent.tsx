import Product from '@/types/Product'
import React from 'react'
import Image from 'next/image'

const ProductComponent = ({ product }: { product: Product }) => {
  return (
    <div className="py-5 rounded-lg bg-white flex flex-col items-center space-y-3 border border-stone-300">
      <div className="px-3">
        <span className="text-xs">$</span><span className="text-sm">{product.price}</span>
      </div>
      <div className="p-5">
        <Image src={product.image} alt={product.title} height={100} width={100} placeholder="blur" blurDataURL="https://placehold.co/600x400/000000/db"/>
      </div>
      <div className="text-xs text-center px-2">{product.title}</div>
    </div>
  )
}

export default ProductComponent