import styled from 'styled-components'
import NavBar from '../components/NavBar.jsx'
import Announcements from '../components/Announcements.jsx'
import Products from '../components/Products.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import Footer from '../components/Footer.jsx'
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


const Container = styled.div``

const Title = styled.h1`
margin : 20px;
`

const FilterContainer = styled.div`
display : flex ;
justify-content : space-between;

`

const Filter = styled.div`
margin : 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
font-size : 20px;
font-weight : 600;
margin-right : 10px;
${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
padding : 10px;
margin-right : 20px;
${mobile({ margin: "10px 0px" })}
`

const Option = styled.option`
`


const ProductList = () => {
  const location = useLocation();
  const cate = location.pathname.split("/")[2]
  const [filters , setFilters] = useState({})
  const [sort , setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters ,
      [e.target.name] : value ,
    })
  }


  return (
    <Container>
      <NavBar />
      <Announcements />
      <Title>{cate}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select name = "color"  onChange={handleFilters}>
            <Option disabled >color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name = "size" onChange={handleFilters}>
            <Option disabled >size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          </Filter>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value= "newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cate={cate} filters = {filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList
