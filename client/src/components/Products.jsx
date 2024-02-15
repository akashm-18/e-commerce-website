import styled from 'styled-components' 
import { popularProducts } from '../data.js'
import Product from './Product.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Container = styled.div`
padding : 20px;
display : flex ;
flex-wrap : wrap ;
`

const Products = ({cate,filters,sort}) => {
  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(cate 
          ? `http://localhost:3000/api/products?category=${cate}`
          : "http://localhost:3000/api/products")
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  } , [cate])

  useEffect(() =>{
    cate && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key,value]) => item[key].includes(value) ) 
      )
    )
  } , [products,cate , filters])

  useEffect(() => {
    if (sort === "newest"){
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      )
    } else if (sort === "asc") {
      setFilteredProducts((prev) => 
      [...prev].sort((a,b) => a.price - b.price)
      )
    } else if (sort === "desc") {
      setFilteredProducts((prev) => 
      [...prev].sort((a,b) => b.price - a.price)
      )
    }
  } , [sort])

  return (
    <Container>
      { cate 
      ? filteredProducts.map((product) => (<Product product = {product} key={product.id} />)) 
      : products
      .slice(0,8)
      .map((product) => (<Product product={product} key={product.id} />)) }
    </Container>
  )
}

export default Products
