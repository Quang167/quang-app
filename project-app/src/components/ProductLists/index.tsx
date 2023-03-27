
import React from 'react'
import { products } from './data'
import "./product.css";

type ProductType = {
    id: number,
    name: string,
    price: number,
    pricesale: number,
    discount: number,
    imageId: string
}

const ProductItem = ({product} : {product: ProductType})=>{
    return (
        <div className='product_Item'>
        <div className="discount">-{product.discount}%</div>
        <img src={product.imageId} alt={product.name}/>
        <h2>{product.name}</h2>
        <p>{product.pricesale} <del>{product.price}</del></p>
        </div>
    )
}

const ProductList = () => {
  return (
    <div className='product_wrapper'>
        {products.map(product => <ProductItem product={product} key={product.id} />)}
    </div>
  )
}

export default ProductList