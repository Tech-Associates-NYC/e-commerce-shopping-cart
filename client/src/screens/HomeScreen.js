import './HomeScreen.css'
// fetch products from store

import { useEffect } from 'react'
// get hooks 

import{ useSelector, useDispatch} from 'react-redux'

// components
import Product from '../components/Product'

// actions
// renaming getproducts to list products to avaoid confusion in names

import {getProducts as listProducts}from '../redux/actions/productActions'

function Homescreen() {
    const dispatch = useDispatch();
    // get products data
    const getProducts = useSelector((state)=> state.getProducts);
    // destructure get products and get products array
    const { products, loading, error } = getProducts
    
    // everytime we load we have to dipatch the product
    useEffect(() => {
        dispatch(listProducts()) 
        // run dispatch as our items put it inside an []
        },[dispatch])
    return (
        <div className='homescreen'>
       <h2 className='homescreen_title'> Latest Products</h2>
            <div className='homescreen_products'>
                {/* testing if its loading and load the data */}
            
                {/* {loading ? (<h2>Loading...</h2> ): error ? (<h2>{error}</h2>): products.map((product)=> <Product/>)} */}
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map(product => (
                        <Product
                        key={product._id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        productId={product._id}
                        />))
                    )}
                {/* <Product/> */}
            </div>
        </div>
    )
}

export default Homescreen



